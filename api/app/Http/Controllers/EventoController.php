<?php

namespace App\Http\Controllers;

use App\Evento;
use App\Usuario;
use App\UsuarioEvento;
use App\Local;
use App\Endereco;
use DB;


use App\Http\Resources\UsuarioEvento as UsuarioEventoResource;
use App\Http\Resources\Evento as EventoResource;
use App\Http\Controllers\NotificacaoController;
use App\Notificacao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


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

    $evento = new Evento();
    dd($dados->evento);
  }

  /**
  * Display the specified resource.
  *
  * @param  \App\Evento  $evento
  * @return \Illuminate\Http\Response
  */
  public function show($id)
  {
    return new EventoResource(Evento::find($id));
  }

  /**
  * Show the form for editing the specified resource.
  *
  * @param  \App\Evento  $evento
  * @return \Illuminate\Http\Response
  */
  public function edit(Evento $evento)
  {
    //
  }

  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  \App\Evento  $evento
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, Evento $evento)
  {
    //
  }

  /**
  * Remove the specified resource from storage.
  *
  * @param  \App\Evento  $evento
  * @return \Illuminate\Http\Response
  */
  public function destroy(Evento $evento)
  {
    //
  }

  public function getEventosProximosUsuario() {
    return UsuarioEventoResource::collection(
      UsuarioEvento::where(['usuario_id' => Auth::user()->id, 'situacao' => 'PENDENTE'])->get()
    );

  }
}
