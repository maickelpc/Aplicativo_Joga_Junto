<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(App\LocalEsporte::class, function (Faker $faker) {
    $locais = DB::table('locais')->pluck('id');
    $esportes = DB::table('esportes')->pluck('id');
    return [
        'local_id' => $faker->randomElement($locais),
        'esporte_id' => $faker->randomElement($esportes)
    ];
});
