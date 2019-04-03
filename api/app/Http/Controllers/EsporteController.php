<?php

namespace App\Http\Controllers;

use App\Esporte;
use App\Http\Resources\Esporte as EsporteResource;
use Illuminate\Http\Request;
use Validator;

class EsporteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EsporteResource::collection(Esporte::paginate());
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


      $esporte = new Esporte();

      $esporte->nome = $dados->get('nome');
      $esporte->descricao = $dados->get('descricao');
      $esporte->qtdMinimo = $dados->get('qtdMinimo');
      $esporte->qtdMaximo = $dados->get('qtdMaximo');
      $esporte->imagem = $dados->get('imagem');
      

      if($esporte->save()) {
        return response()->json(new EsporteResource($esporte), 201);
      } else {
        return response()->json(new EsporteResource($esporte), 400);
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
        return new EsporteResource(Esporte::find($id));
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

        $esporte =  Esporte::findOrFail($id);

        $esporte->nome = $dados->get('nome');
        $esporte->descricao = $dados->get('descricao');
        $esporte->qtdMinimo = $dados->get('qtdMinimo');
        $esporte->qtdMaximo = $dados->get('qtdMaximo');
        
        if($esporte->save()) {
          return response()->json(new EsporteResource($esporte), 201);
        } else {
          return response()->json(new EsporteResource($esporte), 400);
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
      $esporte = Esporte::findOrFail($id);
      if($esporte->delete()) {
        return response()->json(new EsporteResource($esporte), 200);
      } else {
        return response()->json(new EsporteResource($esporte), 400);
      }
    }

    private function validar($id, $dados){

      $regras = [
        'nome' => 'required|max:20',
        'descricao' => 'required|max:255',
        'qtdMinimo' => 'required|integer|min:0',
        'qtdMaximo' => 'required|integer|min:0'
      ];

      $validator = Validator::make($dados, $regras);

      return $validator->errors()->all();

    }
}
