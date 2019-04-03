<?php

namespace App\Http\Controllers;

use App\Endereco;
use App\Http\Resources\Endereco as EnderecoResource;
use Illuminate\Http\Request;
use Validator;

class EnderecoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EnderecoResource::collection(Endereco::paginate());
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


      $endereco = new Endereco();

      $endereco->cidade_id = $dados->get('cidade_id');
      $endereco->logradouro = $dados->get('logradouro');
      $endereco->bairro = $dados->get('bairro');
      $endereco->numero = $dados->get('numero');
      $endereco->cep = $dados->get('cep');
      $endereco->complemento = $dados->get('complemento');
      $endereco->referencia = $dados->get('referencia');


      if($endereco->save()) {
        return response()->json(new EnderecoResource($endereco), 201);
      } else {
        return response()->json(new EnderecoResource($endereco), 400);
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
        return new EnderecoResource(Endereco::find($id));
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

        $endereco =  Endereco::findOrFail($id);

        $endereco->cidade_id = $dados->get('cidade_id');
        $endereco->logradouro = $dados->get('logradouro');
        $endereco->bairro = $dados->get('bairro');
        $endereco->numero = $dados->get('numero');
        $endereco->cep = $dados->get('cep');
        $endereco->complemento = $dados->get('complemento');
        $endereco->referencia = $dados->get('referencia');

        if($endereco->save()) {
          return response()->json(new EnderecoResource($endereco), 201);
        } else {
          return response()->json(new EnderecoResource($endereco), 400);
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
      $endereco = Endereco::findOrFail($id);
      if($endereco->delete()) {
        return response()->json(new EnderecoResource($endereco), 200);
      } else {
        return response()->json(new EnderecoResource($endereco), 400);
      }
    }

    public function validar($id, $dados){

      $regras = [
        'logradouro' => 'required|max:150',
        'bairo' => 'required|max:50',
        'bairo' => 'max:6',
        'cep' => 'required|max:8',
        'complemento' => 'max:150',
        'referencia' => 'max:150',
        'cidade_id' => 'required|integer|exists:cidades,id'
      ];

      $validator = Validator::make($dados, $regras);

      return $validator->errors()->all();

    }
}
