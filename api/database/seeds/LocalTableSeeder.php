<?php

use Illuminate\Database\Seeder;

class LocalTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Local::class, 30)->create()->each(function ($seed) {
            $seed->save();
        });
    }
}
