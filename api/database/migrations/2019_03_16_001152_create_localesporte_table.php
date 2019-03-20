<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocalesporteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('local_esporte', function (Blueprint $table) {
            $table->integer('local_id')->unsigned();
            $table->integer('esporte_id')->unsigned();

            $table->foreign('local_id')->references('id')->on('locais');
            $table->foreign('esporte_id')->references('id')->on('esportes');
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
    }
}
