<?php

namespace App\Http\Controllers;

use App\Cidade;
use App\Http\Resources\Cidade as CidadeResource;
use Illuminate\Http\Request;
use Validator;

class CidadeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CidadeResource::collection(Cidade::paginate());
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


      $cidade = new Cidade();

      $cidade->nome = $dados->get('nome');
      $cidade->codigoIbge = $dados->get('codigoIbge');
      $cidade->estado_id = $dados->get('estado_id');

      if($cidade->save()) {
        return response()->json(new CidadeResource($cidade), 201);
      } else {
        return response()->json(new CidadeResource($cidade), 400);
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
        return new CidadeResource(Cidade::find($id));
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

        $cidade =  Cidade::findOrFail($id);

        $cidade->nome = $dados->get('nome');
        $cidade->codigoIbge = $dados->get('codigoIbge');
        $cidade->estado_id = $dados->get('estado_id');

        if($cidade->save()) {
          return response()->json(new CidadeResource($cidade), 201);
        } else {
          return response()->json(new CidadeResource($cidade), 400);
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
      $cidade = Cidade::findOrFail($id);
      if($cidade->delete()) {
        return response()->json(new CidadeResource($cidade), 200);
      } else {
        return response()->json(new CidadeResource($cidade), 400);
      }
    }

    private function validar($id, $dados){

      $regras = [
        'nome' => 'required|max:100',
        'codigoIbge' => 'max:20|unique:cidades,codigoIbge,'.$id,
        'estado_id' => 'required|integer|exists:estados,id'
      ];

      $validator = Validator::make($dados, $regras);

      return $validator->errors()->all();

    }
}
