<?php

use Illuminate\Database\Seeder;

class EsporteTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Esporte::class, 10)->create()->each(function ($seed) {
            $seed->save();
        });
    }
}
