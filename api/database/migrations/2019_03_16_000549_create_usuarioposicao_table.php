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
        Schema::create('usuarioposicao', function (Blueprint $table) {
            $table->integer('usuario_id')->unsigned();
            $table->integer('posicao_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('usuarioposicao', function( Blueprint $table) {
            $table->foreign('usuario_id')->references('id')->on('usuario');
            $table->foreign('posicao_id')->references('id')->on('posicao');
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
        Schema::dropIfExists('usuarioposicao');
    }
}
