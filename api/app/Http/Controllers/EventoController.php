<?php

namespace App\Http\Controllers;

use App\Evento;
use App\Usuario;
use App\UsuarioEvento;
use App\Local;
use App\Endereco;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;


use App\Http\Resources\UsuarioEvento as UsuarioEventoResource;
use App\Http\Resources\Evento as EventoResource;
use App\Http\Controllers\NotificacaoController;
use App\Notificacao;
use Illuminate\Http\Request;



class EventoController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    //
  }

  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function create()
  {
    //
  }

  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(Request $request){
    $dados = json_decode($request->getContent());
    $eventoDados = $dados->evento;
    $convidados = $dados->convidados;


    try{

      DB::beginTransaction();
      $evento = new Evento();
      $localId = $eventoDados->local->id;
      if($localId == -1){
        $endereco = new Endereco();
        $endereco->cidade_id = Auth::user()->endereco->cidade_id;
        $endereco->logradouro = $eventoDados->local->endereco->logradouro;
        $endereco->bairro = $eventoDados->local->endereco->bairro;
        $endereco->cep = '';
        $endereco->save();

        $local = new Local();
        $local->endereco_id = $endereco->id;
        $local->nome=$eventoDados->local->nome;
        $local->usuarioResponsavel_id = Auth::user()->id;
        $local->valido = false;
        $local->save();

        $localId = $local->id;

      }

      $evento->local_id = $localId;
      $evento->usuarioResponsavel_id = Auth::user()->id;
      $evento->esporte_id = $eventoDados->esporte->id;
      $evento->dataRealizacao = $eventoDados->dataRealizacao;
      $evento->horario = $eventoDados->horario;
      $evento->descricao = $eventoDados->descricao;
      $evento->vagas = $eventoDados->vagas;
      $evento->publico = $eventoDados->publico;
      $evento->valorCusto = $eventoDados->valor;

      $evento->save();


      $notControler = new NotificacaoController();
      $emails = [];
      foreach($convidados as $convidado){
        if($convidado->_objectInstance->emails != null){
          foreach ($convidado->_objectInstance->emails as $email) {
            array_push($emails, $email->value);
          }
        }
      }
      $usuariosConvidados = Usuario::whereIn('email', $emails)->get();

      foreach ($usuariosConvidados as $usuarioconvidado) {
        $participante = new UsuarioEvento();
        $participante->usuario_id = $usuarioconvidado->id;
        $participante->evento_id = $evento->id;
        $participante->save();
        // dd($participante);
        $notControler->notificarConvite($usuarioconvidado, $evento);

      }

      DB::commit();

      return response()->json($evento);
    }catch(Exception $ex){
      DB::rollback();
      return response()->json($ex->getMessage(), 400);
    }
  }

  public function getEventosPendentes($usuarioId=null){

    
    if($usuarioId == null)
      $usuarioId = Auth::user()->id;

      $eventosId = DB::table('usuario_evento')
      ->join('eventos', 'eventos.id', '=', 'usuario_evento.evento_id')
      ->where('usuario_evento.usuario_id',$usuarioId)
      ->where('usuario_evento.situacao', 'PENDENTE')
      ->where('usuario_evento.deleted_at', NULL)
      ->where('eventos.dataRealizacao', '>=', Carbon::now())->select('eventos.id')->get()->map(function($dado){return ($dado->id);})->toArray();
      

      return EventoResource::collection(
        Evento::whereIn('id', $eventosId)->get()
      );

  }

  
  
  public function aceitarConvite($eventoId) {
    try{
      DB::beginTransaction();

        $participacao = UsuarioEvento::where('usuario_id', Auth::user()->id)->where('evento_id', $eventoId)
        ->where('situacao', 'PENDENTE')->firstOrFail();

        $participacao->situacao = 'CONFIRMADO';
        $participacao->dataConfirmacao = Carbon::now();
        $participacao->save();

      DB::commit();
      return response()->json('Convite Aceito com sucesso');
    }catch(Exception $e){
      DB::rollback();

      return response()->json('Erro ao tentar Aceitar o convite: ' . $e->getMessage(), 400);
    }

    return response()->json('Erro', 400);
    
 }

 public function recusarConvite($eventoId) {
  try{
    DB::beginTransaction();

      $participacao = UsuarioEvento::where('usuario_id', Auth::user()->id)->where('evento_id', $eventoId)
      ->where('situacao', 'PENDENTE')->firstOrFail();

      $participacao->delete();

    DB::commit();
    return response()->json('Convite Aceito com sucesso');
  }catch(Exception $e){
    DB::rollback();

   return response()->json('Erro ao tentar Aceitar o convite: ' . $e->getMessage(), 400);
  }

  return response()->json('Erro', 400);
}

    public function getEventosProximosUsuario() {
       return UsuarioEventoResource::collection(
           UsuarioEvento::where(['usuario_id' => Auth::user()->id, 'situacao' => 'PENDENTE'])->get()
       );
    }

    public function getEventosRegiaoUsuario($lat, $lng) {
      $results = DB::select(
        "
        SELECT
        e.*
        FROM eventos e
        join locais l on l.id = e.local_id
        WHERE \"dataRealizacao\" BETWEEN DATE(NOW()) AND DATE( (NOW() + INTERVAL '+ 3 DAYS') )
        GROUP BY l.id, e.id
        HAVING (
           6371 *
           acos(cos(radians($lat)) *
           cos(radians(CAST(l.latitude AS DOUBLE PRECISION))) *
           cos(radians(CAST(l.longitude AS DOUBLE PRECISION)) -
           radians($lng)) +
           sin(radians($lat)) *
           sin(radians(CAST(l.latitude AS DOUBLE PRECISION) )))
        ) < 10
        LIMIT 20;
        "
      );
       return EventoResource::collection(
          Evento::hydrate($results)
       );
    }
}
