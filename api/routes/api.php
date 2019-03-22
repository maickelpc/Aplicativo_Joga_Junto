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

Route::post('register', 'Auth\RegisterController@register');
