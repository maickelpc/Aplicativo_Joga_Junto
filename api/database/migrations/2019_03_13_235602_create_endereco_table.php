<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEnderecoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enderecos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('cidade_id')->unsigned();
            $table->string('logradouro', 150);
            $table->string('bairro', 50);
            $table->string('numero', 6)->nullable();
            $table->string('cep', 8);
            $table->string('complemento', 150)->nullable();
            $table->string('referencia', 150)->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('cidade_id')->references('id')->on('cidades');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('enderecos');
    }
}
