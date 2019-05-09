<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

$factory->define(App\Local::class, function (Faker $faker) {
    $usuarios = DB::table('usuarios')->pluck('id');
    $enderecos = DB::table('enderecos')->pluck('id');
    $quadras = ['quadra1.jpg', 'quadra2.jpg', 'quadra3.jpeg'];
    $nomesquadras = ['Planeta Bola', 'Dragão', 'Flamenguinho', 'Quadra do '.$faker->name];
    return [
        'nome' => $faker->sentence,
        'descricao' => $faker->randomElement($nomesquadras),
        'latitude' => $faker->latitude,
        'longitude' => $faker->longitude,
        'imagem' => $faker->randomElement($quadras),
        'telefone' => rand(1111111111, 9999999999),
        'horarioAtendimento' => $faker->time('H:i', 'now'),
        'usuarioResponsavel_id' => $faker->randomElement($usuarios),
        'valido' => false,
        'endereco_id' => $faker->randomElement($enderecos),
        'comoChegar' => $faker->sentence
    ];
});
