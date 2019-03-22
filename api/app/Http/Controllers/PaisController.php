<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PaisCollection;
use App\Pais;
use Validator;
use App\Http\Requests\PaisRequest;
use App\Http\Resources\Pais as PaisResource;

class PaisController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    return PaisResource::collection(Pais::paginate());
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
    if($validacao != null)
      return response()->json($validacao, 400);


    $pais = new Pais();

    $pais->nome = $dados->get('nome');
    $pais->sigla = $dados->get('sigla');
    $pais->ddi = $dados->get('ddi');

    if($pais->save()) {
      return response()->json($pais, 201);
    } else {
      return response()->json($pais, 400);
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
    return new PaisResource(Pais::find($id));
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
    if($validacao != null)
      return response()->json($validacao, 400);

    $pais = Pais::findOrFail($id);
    $pais->nome = $dados->get('nome');
    $pais->sigla = $dados->get('sigla');
    $pais->ddi = $dados->get('ddi');
    if($pais->save()) {
      return response()->json($pais, 200);
    } else {
      return response()->json($pais, 400);
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
    $pais = Pais::findOrFail($id);
    if($pais->delete()) {
      return response()->json($pais, 200);
    } else {
      return response()->json($pais, 400);
    }
  }

  private function validar($id, $dados){

    $regras = [
      'nome' => 'required|max:100|unique:paises,nome,'.$id,
      'sigla' => 'required|max:3|unique:paises,sigla,'.$id,
      'ddi' => 'max:3'
    ];

    $validator = Validator::make($dados, $regras);
    return $validator->errors()->all();

  }
}
