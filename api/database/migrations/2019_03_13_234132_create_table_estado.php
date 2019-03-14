<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableEstado extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estado', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('pais_id')->unsigned();
            $table->string('nome', 100)->unique();
            $table->string('sigla', 2)->unique();
            $table->timestamps();
        });

        Schema::table('estado', function (Blueprint $table) {
            $table->foreign('pais_id')->references('id')->on('pais');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estado');
    }
}
