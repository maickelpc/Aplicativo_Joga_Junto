<?php

use Illuminate\Database\Seeder;

class PosicaoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Posicao::class, 20)->create()->each(function ($seed) {
            $seed->save();
        });
    }
}
