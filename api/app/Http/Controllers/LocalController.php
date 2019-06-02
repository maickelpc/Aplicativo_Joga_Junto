<?php

namespace App\Http\Controllers;

use App\Local;
use App\Http\Resources\Local as LocalResource;
use App\Http\Controllers\EnderecoController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Validator;
use App\Endereco;
use App\Esporte;
Use Exception;
Use DB;

class LocalController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    return LocalResource::collection(Local::paginate());
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


    $enderecoController = new EnderecoController();
    $validacao = $enderecoController->validar(0, $dados->get('endereco'));
    if ($validacao != null)
    return response()->json($validacao, 400);
    try{
      DB::beginTransaction();
      $endereco = Endereco::create($dados->get('endereco'));

      $local = new Local();

      $local->nome = $dados->get('nome');
      $local->descricao = $dados->get('descricao');
      $local->latitude = $dados->get('latitude');
      $local->longitude = $dados->get('longitude');
      $local->imagem = $dados->get('imagem');
      $local->telefone = $dados->get('telefone');
      $local->horarioAtendimento = $dados->get('horarioAtendimento');
      $local->usuarioResponsavel_id = $dados->get('usuarioResponsavel_id');
      $local->valido = $dados->get('valido');
      $local->comoChegar = $dados->get('comoChegar');
      $local->endereco_id = $endereco->id;
      $local->save();
      DB::commit();
      return response()->json(new LocalResource($local), 201);

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
    return new LocalResource(Local::find($id));
  }

  public function localPorEsporte(Request $request, $esporte_id)
  {

    $usuario = Auth::user();
    $cidade = $usuario->endereco->cidade;
    $locaisId = DB::table('locais')
    ->join('enderecos', 'enderecos.id', '=', 'locais.endereco_id')
    ->join('cidades', 'cidades.id', '=', 'enderecos.cidade_id')
    ->join('local_esporte', 'locais.id', '=', 'local_esporte.local_id')
    ->where('cidades.id',$cidade->id)
    ->where('local_esporte.esporte_id', $esporte_id);
    if($request->has('nome'))
      $locaisId = $locaisId->where('locais.nome', 'ilike', '%'.$request->get('nome').'%');
    $locaisId = $locaisId->select('locais.id')->get();
    $locaisId = $locaisId->map(function($dado){return ($dado->id);})->toArray();
    
    $locais = Local::with(['endereco','endereco.cidade'])->whereIn('id', $locaisId)->orderBy('nome')->get();
    
    return response()->json($locais);
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

    $local =  Local::with('endereco')->findOrFail($id);
    try{
      DB::beginTransaction();


      $local->nome = $dados->get('nome');
      $local->descricao = $dados->get('descricao');
      $local->latitude = $dados->get('latitude');
      $local->longitude = $dados->get('longitude');
      $local->imagem = $dados->get('imagem');
      $local->telefone = $dados->get('telefone');
      $local->horarioAtendimento = $dados->get('horarioAtendimento');
      $local->usuarioResponsavel_id = $dados->get('usuarioResponsavel_id');
      $local->valido = $dados->get('valido');
      $local->comoChegar = $dados->get('comoChegar');
      $local->save();


      if(count($dados->get('endereco')) > 0){
        if($dados->get('endereco')['id'] > 0){
          // Se for apenas alteracao no endereco
          $endereco = $local->endereco;
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
          $local->endereco_id = $endereco->id;
          $local->save();
        }
      }

      DB::commit();
      return response()->json(new LocalResource($local), 200);
    }catch(Exception $ex){
      DB::rollback();
      return response()->json(new LocalResource($local), 400);
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
    $local = Local::findOrFail($id);
    if($local->delete()) {
      return response()->json(new LocalResource($local), 200);
    } else {
      return response()->json(new LocalResource($local), 400);
    }
  }

  private function validar($id, $dados){

    $regras = [
      'nome' => 'required|max:100',
      'usuarioResponsavel_id' => 'required|integer|exists:usuarios,id',
      'latitude' => 'max:20',
      'longitude' => 'max:20',
      'telefone' => 'max:14',
      'horarioAtendimento' => 'max:12',
      'comoChegar' => 'max:255',
    ];

    $validator = Validator::make($dados, $regras);

    return $validator->errors()->all();

  }
}
