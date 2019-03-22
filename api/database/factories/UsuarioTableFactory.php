<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(App\Usuario::class, function (Faker $faker) {
    $enderecos = DB::table('enderecos')->pluck('id');
    return [
        'endereco_id' => $faker->randomElement($enderecos),
        'nome' => $faker->firstName,
        'sobrenome' => $faker->lastName,
        'email' => $faker->freeEmail,
        'dataNascimento' => $faker->date('Y-m-d', 'now'),
        'username' => strtolower($faker->firstName),
        'password' => bcrypt('admin'),
        'score' => $faker->randomFloat(1, 1, 5),
        'telefone' => rand(1111111111, 9999999999),
        'latitude' => $faker->latitude,
        'longitude' => $faker->longitude
    ];
});
