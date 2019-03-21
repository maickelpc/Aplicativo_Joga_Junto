<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

$factory->define(App\Estado::class, function (Faker $faker) {
    $paises = DB::table('paises')->pluck('id');
    return [
        'nome' => $faker->unique()->city,
        'sigla' => strtoupper(Str::random(2)),
        'pais_id' => $faker->randomElement($paises)
    ];
});
