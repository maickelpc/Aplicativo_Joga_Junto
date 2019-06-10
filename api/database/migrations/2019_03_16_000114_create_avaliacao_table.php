<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAvaliacaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacoes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('texto')->nullable();
            $table->integer('score')->default(5);
            $table->integer('usuarioAvaliado_id')->unsigned();
            $table->integer('usuarioAvaliador_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('usuarioAvaliador_id')->references('id')->on('usuarios');

            //$table->foreign('usuarioAvaliado_id')->references('id')->on('usuarios');
            $table->foreign('usuarioAvaliado_id')->references('id')->on('usuario_evento');
            
            $table->unique('usuarioAvaliado_id','usuarioAvaliador_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('avaliacoes');
    }
}
