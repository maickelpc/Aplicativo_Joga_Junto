<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotificacaosTable extends Migration
{
  /**
  * Run the migrations.
  *
  * @return void
  */
  public function up()
  {
    Schema::create('notificacao', function (Blueprint $table) {
      $table->increments('id');
      $table->string('titulo',100);
      $table->string('mensagem',255);
      $table->dateTime('dataLeitura')->nullable();
      $table->integer('usuario_id')->unsigned();
      $table->integer('usuario_envio_id')->unsigned();
      $table->timestamps();

      $table->foreign('usuario_id')->references('id')->on('usuarios');
      $table->foreign('usuario_envio_id')->references('id')->on('usuarios');

    });
  }

  /**
  * Reverse the migrations.
  *
  * @return void
  */
  public function down()
  {
    Schema::dropIfExists('notificacao');
  }
}
