<?php

use Illuminate\Database\Seeder;

class CidadeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Cidade::class, 20)->create()->each(function ($cidade) {
            $cidade->save();
        });
    }
}
