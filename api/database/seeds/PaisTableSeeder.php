<?php

use Illuminate\Database\Seeder;

class PaisTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Pais::class, 10)->create()->each(function ($pais) {
            $pais->save();
        });
    }
}
