<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(App\UsuarioPosicao::class, function (Faker $faker) {
    $usuarios = DB::table('usuarios')->pluck('id');
    $posicoes = DB::table('posicoes')->pluck('id');
    return [
        'usuario_id' => $faker->randomElement($usuarios),
        'posicao_id' => $faker->randomElement($posicoes)
    ];
});
