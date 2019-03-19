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
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/pais', 'PaisController@index')->name('pais.all');
Route::post('/pais', 'PaisController@store')->name('pais.store');
Route::get('/pais/{id}', 'PaisController@show')->name('pais.show');
Route::put('/pais/{id}', 'PaisController@update')->name('pais.update');
Route::delete('/pais/{id}', 'PaisController@destroy')->name('pais.delete');

Route::post('register', 'Auth\RegisterController@register');