<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Esporte::class, function (Faker $faker) {

    $esportes = ['Futebol', 'Futebol de Salão', 'Vôlei', 'Basquete'];

    return [
        'nome' => $faker->randomElement($esportes),
        'descricao' => $faker->sentence,
        'imagem' => Str::random(100).".jpg",
        'qtdMinimo' => rand(5, 20),
        'qtdMaximo' => rand(5, 20)
    ];
});
