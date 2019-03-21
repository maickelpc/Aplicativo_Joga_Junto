<?php

use Illuminate\Database\Seeder;

class EventoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Evento::class, 50)->create()->each(function ($seed) {
            $seed->save();
        });
    }
}
