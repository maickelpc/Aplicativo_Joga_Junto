<?php

use Illuminate\Database\Seeder;

class UsuarioEventoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\UsuarioEvento::class, 200)->create()->each(function ($seed) {
            $seed->save();
        });
    }
}
