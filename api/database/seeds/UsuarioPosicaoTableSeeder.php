<?php

use Illuminate\Database\Seeder;

class UsuarioPosicaoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\UsuarioPosicao::class, 50)->create()->each(function ($seed) {
            $seed->save();
        });
    }
}
