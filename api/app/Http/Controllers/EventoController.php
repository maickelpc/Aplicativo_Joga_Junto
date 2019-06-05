<?php

namespace App\Http\Controllers;

use App\Evento;
use App\Usuario;
use App\UsuarioEvento;
use App\Local;
use App\Endereco;
use DB;


use App\Http\Resources\UsuarioEvento as UsuarioEventoResource;
use App\Http\Resources\Evento as EventoResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


<<<<<<< HEAD

=======
>>>>>>> e07458b328a4061dccb3189d62f6458d95f57f4e
class EventoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(Request $request){
        $dados = json_decode($request->getContent());
        $eventoDados = $dados->evento;
        $convidados = $dados->convidados;

       
        try{

            DB::beginTransaction();
            $evento = new Evento();
            $localId = $eventoDados->local->id;
            if($localId == -1){
                $endereco = new Endereco();
                $endereco->cidade_id = Auth::user()->endereco->cidade_id;
                $endereco->logradouro = $eventoDados->local->endereco->logradouro;
                $endereco->bairro = $eventoDados->local->endereco->bairro;
                $endereco->cep = '';
                $endereco->save();

                $local = new Local();
                $local->endereco_id = $endereco->id;
                $local->nome=$eventoDados->local->nome;
                $local->usuarioResponsavel_id = Auth::user()->id;
                $local->valido = false;
                $local->save();

                $localId = $local->id;

            }
            $evento->local_id = $localId;
            $evento->usuarioResponsavel_id = Auth::user()->id;
            $evento->esporte_id = $eventoDados->esporte->id;
            $evento->dataRealizacao = $eventoDados->dataRealizacao;
            $evento->horario = $eventoDados->horario;
            $evento->descricao = $eventoDados->descricao;
            $evento->vagas = $eventoDados->vagas;
            $evento->publico = $eventoDados->publico;
            $evento->valorCusto = $eventoDados->valor;
            
            $evento->save();
            

            //Baseado nos convidados, gerar notificacoes e os convidados

          
            DB::commit();

            return response()->json($evento);
        }catch(Exception $ex){
            DB::rollback();
            return response()->json($ex->getMessage(), 400);
        }

        $evento = new Evento();
        dd($dados->evento);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Evento  $evento
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new EventoResource(Evento::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Evento  $evento
     * @return \Illuminate\Http\Response
     */
    public function edit(Evento $evento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Evento  $evento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Evento $evento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Evento  $evento
     * @return \Illuminate\Http\Response
     */
    public function destroy(Evento $evento)
    {
        //
    }

    public function getEventosProximosUsuario() {
       return UsuarioEventoResource::collection(
           UsuarioEvento::where(['usuario_id' => Auth::user()->id, 'situacao' => 'PENDENTE'])->get()
       );
    }

    public function getEventosRegiaoUsuario($lat, $lng) {
      $results = DB::select(
        "
        SELECT
        e.*
        FROM eventos e
        join locais l on l.id = e.local_id
        WHERE \"dataRealizacao\" BETWEEN DATE(NOW()) AND DATE( (NOW() + INTERVAL '+ 3 DAYS') )
        GROUP BY l.id, e.id
        HAVING (
           6371 *
           acos(cos(radians($lat)) *
           cos(radians(CAST(l.latitude AS DOUBLE PRECISION))) *
           cos(radians(CAST(l.longitude AS DOUBLE PRECISION)) -
           radians($lng)) +
           sin(radians($lat)) *
           sin(radians(CAST(l.latitude AS DOUBLE PRECISION) )))
        ) < 10
        LIMIT 20;
        "
      );
       return EventoResource::collection(
          Evento::hydrate($results)
       );
    }
}
