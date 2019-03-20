<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuarioeventoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario_evento', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('usuario_id')->unsigned();
            $table->integer('evento_id')->unsigned();
            $table->enum('situacao', ['PENDENTE', 'CONFIRMADO', 'CANCELADO', 'EXCLUIDO', 'FALTOU', 'COMPARECEU', 'QUITADO'])->default('PENDENTE');
            $table->dateTime('dataConfirmacao')->nullable();
            $table->dateTime('dataCancelamento')->nullable();
            $table->dateTime('dataExclusao')->nullable();
            $table->dateTime('dataPagamento')->nullable();
            $table->string('justificativa')->nullable();
            $table->timestamps();

            $table->foreign('usuario_id')->references('id')->on('usuarios');
            $table->foreign('evento_id')->references('id')->on('eventos');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario_evento');
    }
}
