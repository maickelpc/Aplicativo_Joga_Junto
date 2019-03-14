<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEsporteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('esporte', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome', 20);
            $table->string('descricao')->nullable();
            $table->string('imagem')->nullable();
            $table->integer('qtdMinimo')->default(1);
            $table->integer('qtdMaximo')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('esporte');
    }
}
