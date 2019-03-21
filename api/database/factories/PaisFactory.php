<?php

use Faker\Generator as Faker;

use Illuminate\Support\Str;

$factory->define(App\Pais::class, function (Faker $faker) {
    return [
        'nome' => $faker->unique()->country,
        'sigla' => strtoupper(Str::random(3)),
        'ddi' => strtoupper(Str::random(3))
    ];
});
