<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

$factory->define(App\Posicao::class, function (Faker $faker) {
    $esportes = DB::table('esportes')->pluck('id');
    return [
        'nome' => Str::random(20),
        'esporte_id' => $faker->randomElement($esportes)
    ];
});
