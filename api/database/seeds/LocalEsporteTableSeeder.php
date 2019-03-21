<?php

use Illuminate\Database\Seeder;

class LocalEsporteTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\LocalEsporte::class, 30)->create()->each(function ($seed) {
            $seed->save();
        });
    }
}
