<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(App\Avaliacao::class, function (Faker $faker) {
    $usuarios = DB::table('usuarios')->pluck('id');
    return [
        'texto' => implode('',$faker->sentences),
        'score' => rand(1, 5),
        'usuarioAvaliado_id' => $faker->randomElement($usuarios),
        'usuarioAvaliador_id' => $faker->randomElement($usuarios)
    ];
});
