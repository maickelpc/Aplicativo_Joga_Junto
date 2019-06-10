<?php

namespace App\Http\Controllers;


use App\UsuarioEvento;
use Illuminate\Http\Request;

use App\Evento;
use App\Usuario;
use App\Local;
use App\Avaliacao;
use App\Endereco;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Exception;

use App\Http\Resources\UsuarioEvento as UsuarioEventoResource;
use App\Http\Resources\Evento as EventoResource;
use App\Http\Controllers\NotificacaoController;
use App\Notificacao;




class UsuarioEventoController extends Controller
{

    public function avaliarParticipante($usuarioEventoId, Request $request){
      try{
        $dados = $request->json();
        DB::beginTransaction();
        $usuarioEvento = UsuarioEvento::with('avaliacoes')->findOrFail($usuarioEventoId);
        $evento = Evento::with('participantes')->find($usuarioEvento->evento_id);
        $dataEvento = $evento->dataRealizacao;
        $horario = explode(':', $evento->horario);
        $dataEvento->setTime($horario[0], $horario[1], $horario[2]);
        throw_if(Carbon::now() < $dataEvento, Exception::class ,"Evento ainda não foi encerrado");

        
        $participo = $evento->participantes->where('usuario_id',Auth::user()->id)->whereNotIn('situacao', ['PENDENTE','REMOVIDO','CANCELADO','FALTOU']);
        
        throw_if($participo->count() == 0, Exception::class, "Você Não participa do evento");
    
        $avaliacao = new Avaliacao();
        $avaliacao->usuarioAvaliado_id =$usuarioEvento->id;
        $avaliacao->usuarioAvaliador_id =Auth::user()->id;
        $avaliacao->score = $dados->get('nota');
        $avaliacao->texto = $dados->get('comentario');
        
        $avaliacao->save();

       
  
        DB::commit();
        return response()->json('Ok');
      return response()->json($participante);
    }catch(Exception $e){
      DB::rollback();
  
     return response()->json('Erro ao tentar registrar a Avaliacao: ' . $e->getMessage(), 400);
    }

    }

    public function solicitarParticipacao($eventoId, Request $request) {
        try{
            DB::beginTransaction();
            $evento = Evento::with('usuarioResponsavel')->findOrFail($eventoId);
            $dataEvento = $evento->dataRealizacao;
            $horario = explode(':', $evento->horario);
            $dataEvento->setTime($horario[0], $horario[1], $horario[2]);
            throw_if(Carbon::now() > $dataEvento, Exception::class ,"Evento encerrado não pode recusar participantes");
            
            $participa = UsuarioEvento::where('usuario_id', Auth::user()->id)
                                        ->where('evento_id', $eventoId)
                                        ->whereIn('situacao', ['EXCLUIDO', 'PENDENTE'])
                                        ->withTrashed()->get();
        
            
            throw_if($participa->count() > 0, Exception::class ,"Você já foi removido deste evento.");
            
            
            $participante = new UsuarioEvento();

            $participante->usuario_id =  Auth::user()->id;
            $participante->evento_id =  $eventoId;
            $participante->situacao =  "PENDENTE";
            $participante->dataConfirmacao = Carbon::now();
            $participante->justificativa =  $request->json()->get('mensagem');
            $participante->save();
      
            $notControler = new NotificacaoController();
      
            
            $notControler->notificarPedidoParticipacao($participante, $evento);

      
            DB::commit();
          return response()->json($participante);
        }catch(Exception $e){
          DB::rollback();
      
         return response()->json('Erro ao tentar registrar o pedido: ' . $e->getMessage(), 400);
        }
      }
  
}
