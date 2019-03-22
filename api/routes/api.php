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

});


Route::post('register', 'Auth\RegisterController@register');
