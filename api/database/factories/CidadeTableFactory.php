<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(App\Cidade::class, function (Faker $faker) {
    $paises = DB::table('estados')->pluck('id');
    return [
        'nome' => $faker->city,
        'codigoIbge' => rand(1111111111, 9999999999),
        'estado_id' => $faker->randomElement($paises)
    ];
});
