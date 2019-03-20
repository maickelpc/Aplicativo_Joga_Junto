<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableCidade extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cidades', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('estado_id')->unsigned();
            $table->string('nome', 100)->unique();
            $table->string('codigoIbge', 20)->unique()->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('estado_id')->references('id')->on('estados');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cidades');
    }
}
