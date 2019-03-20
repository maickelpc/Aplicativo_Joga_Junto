<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Evento extends Model
{
  use SoftDeletes;
  protected $table = 'eventos';
  protected $fillable = [
    'id',
    'local_id',
    'usuarioResponsavel_id',
    'horario',
    'descricao',
    'vagas',
    'publico',
    'valorCusto',
    'justificativaCancelamento'];

  protected $dates = [
    'data',
    'dataCancelamento',
    'created_at', 'updated_at', 'deleted_at'];

  public function local(){
    return $this->hasMany('App\Local', 'local_id');
  }

  public function esporte(){
    return $this->hasMany('App\Esporte', 'esporte_id');
  }

  public function usuarioResponsavel(){
    return $this->hasMany('App\Usuario', 'usuarioResponsavel_id');
  }

  public function participantes(){
    return $this->hasMany('App\UsuarioEvento', 'evento_id');
  }

}
