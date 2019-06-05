<?php

namespace App\Http\Controllers;

use App\Notificacao;
use Illuminate\Support\Facades\Mail;
use App\Http\Resources\Notificacao as NotificacaoResource;
use Illuminate\Http\Request;
use Validator;
use Tymon\JWTAuth\JWT;
use Illuminate\Support\Facades\Auth;
use App\Mail\SendConviteEvento;

class NotificacaoController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    return NotificacaoResource::collection(Notificacao::paginate());
  }

  public function notificarConvite($usuario, $evento){

    $notificacao = new Notificacao();
    $esporte = $evento->esporte->nome;
    $convidante = Auth::user()->nome;
    $dataHora = $evento->dataRealizacao->format('d/m/Y') . ' às ' . $evento->horario . 'h';
    $notificacao->usuario_id = $usuario->id;
    $notificacao->usuario_envio_id = $evento->usuarioResponsavel_id;
    $notificacao->titulo = "Convite para partida de $esporte";
    $notificacao->mensagem =
    "Olá $usuario->nome, o $convidante está te convidando para uma partida de $esporte no dia  $dataHora";

    $notificacao->save();

    try{
      // TODO: Criar um JOB para executar independente 
      Mail::to($usuario->email)
      ->send( new SendConviteEvento($notificacao, $evento));
    }catch(Exception $ex){
      //throw new Exception("Não foi possível validar o seu email!");
    }
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
  public function store(Request $request)
  {
    $dados = $request->json();
    $validacao = $this->validar(0, $dados->all());
    if ($validacao != null)
    return response()->json($validacao, 400);


    $notificacao = new Notificacao();

    $notificacao->titulo = $dados->get('titulo');
    $notificacao->mensagem = $dados->get('mensagem');
    $notificacao->usuario_id = $dados->get('usuario_id');
    //$notificacao->usuario_envio_id = $dados->get('usuario_envio_id');
    $notificacao->usuario_envio_id = Auth::user()->id;

    if($notificacao->save()) {
      return response()->json(new NotificacaoResource($notificacao), 201);
    } else {
      return response()->json(new NotificacaoResource($notificacao), 400);
    }
  }

  /**
  * Display the specified resource.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function show($id)
  {
    return new NotificacaoResource(Notificacao::find($id));
  }

  /**
  * Show the form for editing the specified resource.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function edit($id)
  {
    //
  }

  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, $id)
  {
    $dados = $request->json();
    $validacao = $this->validar($id, $dados->all());
    if ($validacao != null)
    return response()->json($validacao, 400);

    $notificacao =  Notificacao::findOrFail($id);

    $notificacao->titulo = $dados->get('titulo');
    $notificacao->mensagem = $dados->get('mensagem');
    $notificacao->dataLeitura = Carbon::create($dados->get('dataLeitura'));

    // $notificacao->usuario_id = $dados->get('usuario_id');
    // $notificacao->usuario_envio_id = $dados->get('usuario_envio_id');
    //
    if($notificacao->save()) {
      return response()->json(new NotificacaoResource($notificacao), 201);
    } else {
      return response()->json(new NotificacaoResource($notificacao), 400);
    }
  }

  /**
  * Remove the specified resource from storage.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function destroy($id)
  {
    $notificacao = Notificacao::findOrFail($id);
    if($notificacao->delete()) {
      return response()->json(new NotificacaoResource($notificacao), 200);
    } else {
      return response()->json(new NotificacaoResource($notificacao), 400);
    }
  }

  private function validar($id, $dados){

    $regras = [
      'titulo' => 'required|max:100',
      'mensagem' => 'required|max:255',
      'usuario_id' => 'required|integer|exists:usuarios,id'
    ];

    $validator = Validator::make($dados, $regras);

    return $validator->errors()->all();

  }
}
