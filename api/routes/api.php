<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|ve
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'APILoginController@login')->name('login');
    Route::post('refresh', 'APILoginController@refresh');
    Route::post('me', 'APILoginController@me');
    Route::post('logout', 'APILoginController@logout');

});

Route::post('/usuario', 'UsuarioController@store')->name('usuario.store');
Route::get('/usuario/confirmar/{id}/{codigo}', 'UsuarioController@confirmarCadastro')->name('usuario.confirmarCadastro');



Route::group([
    'middleware' => 'jwt.auth'
], function ($router) {

    Route::get('/pais', 'PaisController@index')->name('pais.all');
    Route::post('/pais', 'PaisController@store')->name('pais.store');
    Route::get('/pais/{id}', 'PaisController@show')->name('pais.show');
    Route::put('/pais/{id}', 'PaisController@update')->name('pais.update');
    Route::delete('/pais/{id}', 'PaisController@destroy')->name('pais.delete');

    Route::get('/estado', 'EstadoController@index')->name('estado.all');
    Route::post('/estado', 'EstadoController@store')->name('estado.store');
    Route::get('/estado/{id}', 'EstadoController@show')->name('estado.show');
    Route::put('/estado/{id}', 'EstadoController@update')->name('estado.update');
    Route::delete('/estado/{id}', 'EstadoController@destroy')->name('estado.delete');

    Route::get('/cidade/ibge/{codigo}', 'CidadeController@codigoIbge')->name('cidade.ibge');
    Route::get('/cidade', 'CidadeController@index')->name('cidade.all');
    Route::post('/cidade', 'CidadeController@store')->name('cidade.store');
    Route::get('/cidade/{id}', 'CidadeController@show')->name('cidade.show');
    Route::put('/cidade/{id}', 'CidadeController@update')->name('cidade.update');
    Route::delete('/cidade/{id}', 'CidadeController@destroy')->name('cidade.delete');

    Route::get('/endereco', 'EnderecoController@index')->name('endereco.all');
    Route::post('/endereco', 'EnderecoController@store')->name('endereco.store');
    Route::get('/endereco/{id}', 'EnderecoController@show')->name('endereco.show');
    Route::put('/endereco/{id}', 'EnderecoController@update')->name('endereco.update');
    Route::delete('/endereco/{id}', 'EnderecoController@destroy')->name('endereco.delete');

    Route::get('/esporte', 'EsporteController@index')->name('esporte.all');
    Route::post('/esporte', 'EsporteController@store')->name('esporte.store');
    Route::get('/esporte/{id}', 'EsporteController@show')->name('esporte.show');
    Route::put('/esporte/{id}', 'EsporteController@update')->name('esporte.update');
    Route::delete('/esporte/{id}', 'EsporteController@destroy')->name('esporte.delete');
    Route::get('/esporte/meus/esportes', 'EsporteController@meusEsportes')->name('meusEsportes');

    Route::get('/posicao', 'PosicaoController@index')->name('posicao.all');
    Route::post('/posicao', 'PosicaoController@store')->name('posicao.store');
    Route::get('/posicao/{id}', 'PosicaoController@show')->name('posicao.show');
    Route::put('/posicao/{id}', 'PosicaoController@update')->name('posicao.update');
    Route::delete('/posicao/{id}', 'PosicaoController@destroy')->name('posicao.delete');

    Route::get('/local', 'LocalController@index')->name('local.all');
    Route::post('/local', 'LocalController@store')->name('local.store');
    Route::get('/local/{id}', 'LocalController@show')->name('local.show');
    Route::put('/local/{id}', 'LocalController@update')->name('local.update');
    Route::patch('/local/{id}', 'LocalController@atualizaPosicao');
    Route::delete('/local/{id}', 'LocalController@destroy')->name('local.delete');
    Route::get('/local/esporte/{esporte_id}', 'LocalController@localPorEsporte')->name('local.porEsporte');
    Route::get('/localsemconfirmacao', 'LocalController@localSemConfirmacao');
    Route::get('/localrequisitar/{localId}', 'LocalController@requisitarPropriedade');
    Route::get('/meuslocais', 'LocalController@meusLocais');
    Route::get('/meuslocais/eventos', 'LocalController@eventosProximos');
    Route::put('/meuslocais/confirmar-evento/{id}', 'LocalController@confirmarEvento');
    Route::put('/meuslocais/cancelar-evento/{id}', 'LocalController@cancelarEvento');    

    Route::get('/notificacao', 'NotificacaoController@index')->name('notificacao.all');
    Route::post('/notificacao', 'NotificacaoController@store')->name('notificacao.store');
    Route::get('/notificacao/{id}', 'NotificacaoController@show')->name('notificacao.show');
    Route::put('/notificacao/{id}', 'NotificacaoController@update')->name('notificacao.update');
    Route::delete('/notificacao/{id}', 'NotificacaoController@destroy')->name('notificacao.delete');

    Route::get('/usuario', 'UsuarioController@index')->name('usuario.all');
    Route::get('/usuario/reenviar', 'UsuarioController@reenviarConfirmacao')->name('usuario.reeviar');
    Route::get('/usuario/{id}', 'UsuarioController@show')->name('usuario.show');
    Route::put('/usuario/{id}', 'UsuarioController@update')->name('usuario.update');
    Route::delete('/usuario/{id}', 'UsuarioController@destroy')->name('usuario.delete');
    Route::patch('/usuario/atualizageoposicao/{id}', 'UsuarioController@atualizaGeoLocalizacao')->name('usuario.atualizaGeo');


    Route::get('/usuario/emailteste/{email}', 'UsuarioController@emailteste')->name('usuario.emailteste');

    

    Route::get('/evento', 'EventoController@index')->name('evento.all');
    Route::get('/evento/getEventosUsuario', 'EventoController@getEventosProximosUsuario')->name('evento.getEventosUsuario');
    Route::get('/evento/getEventosRegiaoUsuario/{lat}/{lng}', 'EventoController@getEventosRegiaoUsuario')->name('evento.getEventosRegiaoUsuario');
    Route::post('/evento', 'EventoController@store')->name('evento.store');
    Route::get('/evento/{id}', 'EventoController@show')->name('evento.show');
    Route::put('/evento/{id}', 'EventoController@update')->name('evento.update');
    Route::delete('/evento/{id}', 'EventoController@destroy')->name('evento.delete');
  
    Route::get('/evento/meus/eventosPendentes/{id?}', 'EventoController@getEventosPendentes');
    Route::patch('/evento/meus/aceitarconvite/{eventoId}', 'EventoController@aceitarConvite');
    Route::delete('/evento/meus/recusarconvite/{eventoId}', 'EventoController@recusarConvite');
    Route::put('/evento/meus/cancelarParticipacao/{eventoId}', 'EventoController@cancelarParticipacao');
    Route::put('/evento/meus/cancelarevento/{eventoId}', 'EventoController@cancelarEvento');
    Route::put('/evento/meus/aceitarparticipante/{id}', 'EventoController@aceitarParticipante');
    Route::put('/evento/meus/recusarparticipante/{id}', 'EventoController@recusarParticipante');
    Route::put('/evento/meus/removerparticipante/{id}', 'EventoController@removerParticipante');

    Route::post('/evento/meus/solicitarparticipacao/{id}', 'UsuarioEventoController@solicitarParticipacao');
    Route::post('/evento/meus/avaliarparticipante/{id}', 'UsuarioEventoController@avaliarParticipante');
    
    
});




Route::post('register', 'Auth\RegisterController@register');
