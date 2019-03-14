<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evento', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('local_id')->unsigned();
            $table->integer('usuarioResponsavel_id')->unsigned();
            $table->integer('esporte_id')->unsigned();
            $table->date('data');
            $table->time('horario');
            $table->string('descricao')->nullable();
            $table->integer('vagas')->unsigned();
            $table->boolean('publico')->default(true);
            $table->decimal('valorCusto', 5, 2);
            $table->dateTime('dataCancelamento')->nullable();
            $table->string('justificativaCancelamento')->nullable();
            $table->timestamps();
        });

        Schema::table('evento', function (Blueprint $table) {
            $table->foreign('local_id')->references('id')->on('local');
            $table->foreign('usuarioResponsavel_id')->references('id')->on('usuario');
            $table->foreign('esporte_id')->references('id')->on('esporte');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('evento');
    }
}
