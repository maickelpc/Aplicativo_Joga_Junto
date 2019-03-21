<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            PaisTableSeeder::class,
            EstadoTableSeeder::class,
            CidadeTableSeeder::class,
            EnderecoTableSeeder::class,
            EsporteTableSeeder::class,
            PosicaoTableSeeder::class,
            UsuarioTableSeeder::class,
            LocalTableSeeder::class,
            LocalEsporteTableSeeder::class,
            EventoTableSeeder::class,
            UsuarioEventoTableSeeder::class,
            UsuarioPosicaoTableSeeder::class,
            AvaliacaoTableSeeder::class
            ]);
    }
}
