<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;
use \Illuminate\Support\Str;

$factory->define(App\Endereco::class, function (Faker $faker) {
    $cidades = DB::table('cidades')->pluck('id');
    return [
        'logradouro' => $faker->streetName,
        'bairro' => Str::random(20),
        'numero' => $faker->buildingNumber,
        'cep' => $faker->numberBetween(11111111, 99999999),
        'complemento' => $faker->sentence,
        'referencia' => $faker->sentence,
        'cidade_id' => $faker->randomElement($cidades)
    ];
});
