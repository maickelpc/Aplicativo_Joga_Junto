<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

$factory->define(App\Local::class, function (Faker $faker) {
    $usuarios = DB::table('usuarios')->pluck('id');
    $enderecos = DB::table('enderecos')->pluck('id');
    return [
        'nome' => $faker->sentence,
        'descricao' => $faker->sentences,
        'latitude' => $faker->latitude,
        'longitude' => $faker->longitude,
        'imagem' => Str::random(100),
        'telefone' => rand(1111111111, 9999999999),
        'horarioAtendimento' => $faker->time('H:i', 'now'),
        'usuarioResponsavel_id' => $faker->randomElement($usuarios),
        'valido' => rand(0, 1),
        'endereco_id' => $faker->randomElement($enderecos),
        'comoChegar' => $faker->sentence
    ];
});
