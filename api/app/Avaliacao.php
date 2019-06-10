<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avaliacao extends Model
{
    protected $table = 'avaliacoes';

    protected $fillable =['texto', 'score'];

    public function usuarioAvaliado(){
        return $this->belongsTo('App\UsuarioEvento', 'usuarioAvaliado_id');
    }

    public function usuarioAvaliador(){
        return $this->belongsTo('App\Usuario', 'usuarioAvaliador_id');
    }
}
