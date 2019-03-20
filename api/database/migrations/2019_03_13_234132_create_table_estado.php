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
        Schema::create('estados', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('pais_id')->unsigned();
            $table->string('nome', 100)->unique();
            $table->string('sigla', 2)->unique();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('pais_id')->references('id')->on('paises');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estados');
    }
}
