<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

$factory->define(App\Evento::class, function (Faker $faker) {
    $locais = DB::table('locais')->pluck('id');
    $usuarios = DB::table('usuarios')->pluck('id');
    $esportes = DB::table('esportes')->pluck('id');

    return [
        'dataRealizacao' => $faker->date('Y-m-d', 'now'),
        'horario' => $faker->time('H:i', 'now'),
        'descricao' => 'Partida do '.$faker->name,
        'vagas' => rand(10, 20),
        'publico' => rand(0, 1),
        'valorCusto' => rand(100, 200),
        'local_id' => $faker->randomElement($locais),
        'usuarioResponsavel_id' => $faker->randomElement($usuarios),
        'esporte_id' => $faker->randomElement($esportes)
    ];
});
