<?php

namespace App\Http\Controllers;

use App\Estado;
use App\Http\Resources\Estado as EstadoResource;
use Illuminate\Http\Request;
use Validator;

class EstadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EstadoResource::collection(Estado::paginate());
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


      $estado = new Estado();

      $estado->nome = $dados->get('nome');
      $estado->sigla = $dados->get('sigla');
      $estado->pais_id = $dados->get('pais_id');

      if($estado->save()) {
        return response()->json($estado, 201);
      } else {
        return response()->json($estado, 400);
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
        return new EstadoResource(Estado::find($id));
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

        $estado =  Estado::findOrFail($id);

        $estado->nome = $dados->get('nome');
        $estado->sigla = $dados->get('sigla');
        $estado->pais_id = $dados->get('pais_id');

        if($estado->save()) {
          return response()->json($estado, 201);
        } else {
          return response()->json($estado, 400);
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
      $estado = Estado::findOrFail($id);
      if($estado->delete()) {
        return response()->json($estado, 200);
      } else {
        return response()->json($estado, 400);
      }
    }

    private function validar($id, $dados){

      $regras = [
        'nome' => 'required|max:100',
        'sigla' => 'required|max:2',
        'pais_id' => 'required|integer|exists:paises,id'
      ];

      $validator = Validator::make($dados, $regras);

      return $validator->errors()->all();

    }
}
