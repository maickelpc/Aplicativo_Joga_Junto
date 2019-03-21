<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(App\UsuarioEvento::class, function (Faker $faker) {
    $usuarios = DB::table('usuarios')->pluck('id');
    $eventos = DB::table('eventos')->pluck('id');
    return [
        'usuario_id' => $faker->randomElement($usuarios),
        'evento_id' => $faker->randomElement($eventos)
    ];
});
