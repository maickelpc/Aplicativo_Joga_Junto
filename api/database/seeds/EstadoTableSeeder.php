<?php

use Illuminate\Database\Seeder;

class EstadoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Estado::class, 20)->create()->each(function ($estado) {
            $estado->save();
        });
    }
}
