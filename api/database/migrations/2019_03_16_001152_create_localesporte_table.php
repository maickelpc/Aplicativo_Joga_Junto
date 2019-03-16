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
        Schema::create('localesporte', function (Blueprint $table) {
            $table->integer('local_id')->unsigned();
            $table->integer('esporte_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('localesporte', function (Blueprint $table) {
            $table->foreign('local_id')->references('id')->on('local');
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
        Schema::dropIfExists('localesporte');
    }
}
