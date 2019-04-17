<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notificacao extends Model
{
    protected $table = 'notificacao';
    protected $fillable = [
      'id',
      'titulo',
      'mensagem',
      'usuario_id',
      'usuario_envio_id'
    ];

    protected $dates = ['created_at', 'updated_at', 'dataLeitura'];

    public function usuario(){
      return belongsTo('App\Usuario', 'usuario_id');
    }

    public function usuarioEnvio(){
      return belongsTo('App\Usuario', 'usuario_envio_id');
    }
}
