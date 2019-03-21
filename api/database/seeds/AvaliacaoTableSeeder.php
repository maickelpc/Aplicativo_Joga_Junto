<?php

use Illuminate\Database\Seeder;

class AvaliacaoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Avaliacao::class, 100)->create()->each(function ($seed) {
            $seed->save();
        });
    }
}
