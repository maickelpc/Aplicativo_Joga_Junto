<?php

use Illuminate\Database\Seeder;

class EnderecoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Endereco::class, 20)->create()->each(function ($endereco) {
            $endereco->save();
        });
    }
}
