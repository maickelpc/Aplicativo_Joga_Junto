<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use App\Usuario;
use App\Http\Resources\Usuario as UsuarioResource;
use App\Http\Controllers\EnderecoController;
use Illuminate\Http\Request;
use Validator;
use Carbon\Carbon;
use App\Endereco;
use App\Mail\SendMailUser;
use App\Mail\SendMailConfirmaCadastro;
Use Exception;
Use DB;
use Illuminate\Support\Facades\Auth;

class UsuarioController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */

  public function emailteste($emailDestino){

     //dd(Auth::user());

     Mail::to($emailDestino)
     ->send( new SendMailConfirmaCadastro(Auth::user()));

    return view('email.confirmaCadastro')->with('usuario', Auth::user());


  }



  public function index()
  {

    return UsuarioResource::collection(Usuario::paginate());
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



    try{
      DB::beginTransaction();
      // $endereco = Endereco::create($dados->get('endereco'));

      $usuario = new Usuario();

      $usuario->nome = $dados->get('nome');
      $usuario->sobrenome = $dados->get('sobrenome');
      $usuario->email = $dados->get('email');
      $data = $dados->get('dataNascimento');


      $usuario->dataNascimento =Carbon::createFromformat('Y-m-d',  $data);

      $usuario->username = $dados->get('username');
      $usuario->password = bcrypt($dados->get('password'));
      $usuario->idFacebook = $dados->get('idFacebook');
      $usuario->idGoogle = $dados->get('idGoogle');
      //$usuario->score = $dados->get('score');
      $usuario->telefone = $dados->get('telefone');
      $usuario->latitude = $dados->get('latitude');
      $usuario->longitude = $dados->get('longitude');

      $usuario->save();

      // $usuario->endereco_id = $endereco->id;
      Mail::to($usuario->email)
      ->send( new SendMailConfirmaCadastro($usuario));




      DB::commit();
      return response()->json(new UsuarioResource($usuario), 201);

    }catch(Exception $ex){
      DB::rollback();
      return response()->json($ex, 400);
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
    return new UsuarioResource(Usuario::find($id));
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

    $usuario =  Usuario::with('endereco')->findOrFail($id);
    try{
      DB::beginTransaction();


      $usuario->nome = $dados->get('nome');

      $usuario->save();


      if(count($dados->get('endereco')) > 0){
        if($dados->get('endereco')['id'] > 0){
          // Se for apenas alteracao no endereco
          $endereco = $usuario->endereco;
          $endereco->cidade_id = $dados->get('endereco')['cidade_id'];
          $endereco->logradouro = $dados->get('endereco')['logradouro'];
          $endereco->bairro = $dados->get('endereco')['bairro'];
          $endereco->numero = $dados->get('endereco')['numero'];
          $endereco->cep = $dados->get('endereco')['cep'];
          $endereco->complemento = $dados->get('endereco')['complemento'];
          $endereco->referencia = $dados->get('endereco')['referencia'];
          $endereco->save();
        }else{
          // Se for  um endereco novo
          $endereco = Endereco::create($dados->get('endereco'));
          $usuario->endereco_id = $endereco->id;
          $usuario->save();
        }
      }

      DB::commit();
      return response()->json(new UsuarioResource($usuario), 200);
    }catch(Exception $ex){
      DB::rollback();
      return response()->json(new UsuarioResource($usuario), 400);
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
    $usuario = Usuario::findOrFail($id);
    if($usuario->delete()) {
      return response()->json(new UsuarioResource($usuario), 200);
    } else {
      return response()->json(new UsuarioResource($usuario), 400);
    }
  }

  private function validar($id, $dados){

    $regras = [
      'nome' => 'max:50',
      'sobrenome' => 'max:150',
      'email' => 'required|email|unique:usuarios,email,'.$id,
      'telefone' => 'max:14',
      'dataNascimento' => 'required',
      'username' => 'required|max:30|unique:usuarios,username,'.$id,
      'idFacebook' => 'max:100',
      'idGoogle' => 'max:100',
      'telefone' => 'max:14',
      'latitude' => 'max:20',
      'longitude' => 'max:20',

    ];

    $validator = Validator::make($dados, $regras);

    return $validator->errors()->all();

  }
}
