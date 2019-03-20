<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePosicaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posicoes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome', 20);
            $table->integer('esporte_id')->unsigned();
            $table->timestamps();

            $table->foreign('esporte_id')->references('id')->on('esportes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posicoes');
    }
}
