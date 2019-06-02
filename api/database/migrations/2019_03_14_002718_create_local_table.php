<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locais', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome', 100);
            $table->string('descricao')->nullable();
            $table->string('latitude', 20)->nullable();
            $table->string('longitude', 20)->nullable();
            $table->string('imagem')->nullable();
            $table->string('telefone', 14)->nullable();
            $table->string('horarioAtendimento', 12)->nullable();
            $table->integer('usuarioResponsavel_id')->unsigned();
            $table->boolean('valido')->default(false);
            $table->integer('endereco_id')->unsigned();
            $table->string('comoChegar')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('usuarioResponsavel_id')->references('id')->on('usuarios');
            $table->foreign('endereco_id')->references('id')->on('enderecos');
        });

        Schema::create('local_esporte', function (Blueprint $table) {
          
            $table->integer('local_id')->unsigned();
            $table->integer('esporte_id')->unsigned();
          
            $table->foreign('esporte_id')->references('id')->on('esportes');
            $table->foreign('local_id')->references('id')->on('locais');
            $table->primary(['local_id','esporte_id']);
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('local_esporte');
        Schema::dropIfExists('locais');
    }
}
