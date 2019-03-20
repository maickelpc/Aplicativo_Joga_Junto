<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuarioposicaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario_posicao', function (Blueprint $table) {
            $table->integer('usuario_id')->unsigned();
            $table->integer('posicao_id')->unsigned();
            $table->timestamps();
            $table->foreign('usuario_id')->references('id')->on('usuarios');
            $table->foreign('posicao_id')->references('id')->on('posicoes');
            $table->unique(['usuario_id', 'posicao_id']);
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario_posicao');
    }
}
