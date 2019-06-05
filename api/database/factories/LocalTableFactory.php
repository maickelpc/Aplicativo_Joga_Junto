<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

$factory->define(App\Local::class, function (Faker $faker) {
    $usuarios = DB::table('usuarios')->pluck('id');
    $enderecos = DB::table('enderecos')->pluck('id');
    $quadras = ['quadra1.jpg', 'quadra2.jpg', 'quadra3.jpeg'];
    $nomesquadras = ['Planeta Bola', 'Dragão', 'Flamenguinho', 'Quadra do '.$faker->name, 'Nenezão'];
    $latlngquadras = [
      ['lat' => '-25.5483784', 'lng' => '-54.5669179'],
      ['lat' => '-25.5036843', 'lng' => '-54.5780075'],
      ['lat' => '-25.5560054', 'lng' => '-54.5713811'],
      ['lat' => '-25.5503914', 'lng' => '-54.5616165']
    ];
    $latlng = $faker->randomElement($latlngquadras);
    return [
        'nome' => $faker->randomElement($nomesquadras),
        'descricao' => $faker->randomElement($nomesquadras),
        'latitude' => $latlng['lat'],
        'longitude' => $latlng['lng'],
        'imagem' => $faker->randomElement($quadras),
        'telefone' => rand(1111111111, 9999999999),
        'horarioAtendimento' => $faker->time('H:i', 'now'),
        'usuarioResponsavel_id' => $faker->randomElement($usuarios),
        'valido' => false,
        'endereco_id' => $faker->randomElement($enderecos),
        'comoChegar' => $faker->sentence
    ];
});
