<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PaisCollection;
use App\Pais;
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
        $dados = $request->json()->all();
        $pais = new Pais();
        if(isset($dados['nome']))
            $pais->nome = $dados['nome'];

        if(isset($dados['sigla']))
            $pais->sigla = $dados['sigla'];

        if(isset($dados['ddi']))
            $pais->ddi = $dados['ddi'];
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
        $dados = $request->json()->all();
        $pais = Pais::findOrFail($id);
        if(isset($dados['nome']))
            $pais->nome = $dados['nome'];

        if(isset($dados['sigla']))
            $pais->sigla = $dados['sigla'];

        if(isset($dados['ddi']))
            $pais->ddi = $dados['ddi'];
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
}
