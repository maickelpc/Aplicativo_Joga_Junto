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
use App\Mail\SendConfirmaAtivacao;
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
  public function confirmarCadastro($idUsuario, $codigoConfirmacao, Request $request){

    try{
      DB::beginTransaction();

      $usuario = Usuario::findOrFail($idUsuario);

      if($usuario->email_verified_at != null)
        throw new Exception("");

      if(strcasecmp($usuario->remember_token, $codigoConfirmacao) == 0){
        $usuario->email_verified_at = Carbon::now();
        $usuario->remember_token = null;
        $usuario->save();
        try{
          Mail::to($usuario->email)
          ->send( new SendConfirmaAtivacao($usuario));
        }catch(Exception $ex){

        }


      }else{
        throw new Exception("");

      }

      DB::commit();
      if($request->isJson())
        return response()->json("Usuario ativado", 200);
      else
        return view('email.confirmaRegistroAtivado')->with('usuario',$usuario);

    }catch(Exception $ex){
      DB::rollback();
      return response()->json("Os dados não conferem", 406);
    }

  }

  public function store(Request $request)
  {

    $dados = collect($request->json()->get('usuario'));

    $validacao = $this->validar(0, $dados->all());
    if ($validacao != null)
      return response()->json($validacao, 400);

    $codigoConfirmacao = strtoupper(substr(md5(date("YmdHis")), 1, 9));
    $codigoConfirmacao = substr($codigoConfirmacao,1,4) . "-" . substr($codigoConfirmacao,5,4);

    try{
      DB::beginTransaction();
      // $endereco = Endereco::create($dados->get('endereco'));


      $usuario = new Usuario();

      $usuario->nome = $dados->get('nome');
      $usuario->sobrenome = $dados->get('sobrenome');
      $usuario->email = $dados->get('email');
      $data = $dados->get('dataNascimento');

      try{
        $usuario->dataNascimento = (strlen($data) == 10)?  Carbon::createFromformat('Y-m-d',  $data) : new Carbon($data);
      }catch(Exception $ex){
        throw new Exception("Data de nascimento informada em formato inválido");
      }
      $idade = Carbon::now()->diffInYears($usuario->dataNascimento);
      if($idade < 18)
        throw new Exception("Idade mínima para cadastro é 18 anos");
      $usuario->username = $dados->get('username');
      $usuario->password = bcrypt($dados->get('password'));
      $usuario->idFacebook = $dados->get('idFacebook');
      $usuario->idGoogle = $dados->get('idGoogle');
      $usuario->remember_token = $codigoConfirmacao;
      $usuario->telefone = $dados->get('telefone');
      $usuario->latitude = $dados->get('latitude');
      $usuario->longitude = $dados->get('longitude');

      $usuario->save();

      try{
        Mail::to($usuario->email)
        ->send( new SendMailConfirmaCadastro($usuario));
      }catch(Exception $ex){
        //throw new Exception("Não foi possível validar o seu email!");
      }
      // $usuario->endereco_id = $endereco->id;





      DB::commit();
      return response()->json(new UsuarioResource($usuario), 201);

    }catch(Exception $ex){
      DB::rollback();
      return response()->json($ex->getMessage(), 400);
    }
  }

  public function reenviarConfirmacao(){

    $usuario = Auth::user();
    if($usuario->email_verified_at == null){
      Mail::to($usuario->email)
      ->send( new SendMailConfirmaCadastro($usuario));

      return response()->json("Email enviado com sucesso!", 200);
    }else{
      return response()->json("Usuário já confirmado!", 400);
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

    // $validacao = $this->validar($id, $dados->all());
    // if ($validacao != null)
    //   return response()->json($validacao, 400);

    $usuario =  Usuario::with('endereco')->findOrFail($id);
    
    try{
      DB::beginTransaction();

      $usuario->nome = $dados->get('nome');
      $usuario->sobrenome = $dados->get('sobrenome');
      $usuario->email = $dados->get('email');
      $data = $dados->get('dataNascimento');
      $usuario->telefone = $dados->get('telefone');
      $usuario->latitude = $dados->get('latitude');
      $usuario->longitude = $dados->get('longitude');

      $usuario->save();
      
      $endereco = null;
      
      
      if(count($dados->get('endereco')) > 0){
        $end = collect($dados->get('endereco'));
        if($end->get('id') > 0){
          // Se for apenas alteracao no endereco
          $endereco = $usuario->endereco;
  
        }else{
          // Se for  um endereco novo
          $endereco = new Endereco();
         
        }
          
          $endereco->cidade_id = $end->has('cidade_id') ? $end->get('cidade_id') : $end->get('cidade')['id'];
          $endereco->logradouro = $end->get('logradouro');
          $endereco->bairro = $end->get('bairro');
          $endereco->numero = $end->get('numero');
          $endereco->cep = $end->get('cep');
          $endereco->complemento = $end->get('complemento');
          $endereco->referencia = $end->get('referencia');
          
          $endereco->save();

          $usuario->endereco_id = $endereco->id;
          $usuario->save();
          
      }
      
      $posicoesInformadas = $dados->get('posicoes');
      $posicoes = array();
      foreach($posicoesInformadas as $p){
        array_push($posicoes,$p['id']);
      }
      sleep(3);


      $usuario->posicoes()->sync($posicoes);

      $usuario = Usuario::with(['endereco','endereco.cidade','posicoes','posicoes.esporte'])->find($id);
      
      DB::commit();
      return response()->json(new UsuarioResource($usuario), 200);
    }catch(Exception $ex){
      DB::rollback();
      return response()->json($ex, 400);
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
      'dataNascimento' => 'required|date',
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
