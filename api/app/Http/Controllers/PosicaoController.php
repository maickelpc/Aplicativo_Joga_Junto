<?php

namespace App\Http\Controllers;

use App\Posicao;
use App\Http\Resources\Posicao as PosicaoResource;
use Illuminate\Http\Request;
use Validator;

class PosicaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PosicaoResource::collection(Posicao::paginate());
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


      $posicao = new Posicao();

      $posicao->nome = $dados->get('nome');
      $posicao->esporte_id = $dados->get('esporte_id');

      if($posicao->save()) {
        return response()->json(new PosicaoResource($posicao), 201);
      } else {
        return response()->json(new PosicaoResource($posicao), 400);
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
        return new PosicaoResource(Posicao::find($id));
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

        $posicao =  Posicao::findOrFail($id);

        $posicao->nome = $dados->get('nome');
        $posicao->esporte_id = $dados->get('esporte_id');

        if($posicao->save()) {
          return response()->json(new PosicaoResource($posicao), 200);
        } else {
          return response()->json(new PosicaoResource($posicao), 400);
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
      $posicao = Posicao::findOrFail($id);
      if($posicao->delete()) {
        return response()->json(new PosicaoResource($posicao), 200);
      } else {
        return response()->json(new PosicaoResource($posicao), 400);
      }
    }

    private function validar($id, $dados){

      $regras = [
        'nome' => 'required|max:100',
        'esporte_id' => 'required|integer|exists:esportes,id'
      ];

      $validator = Validator::make($dados, $regras);

      return $validator->errors()->all();

    }
}
