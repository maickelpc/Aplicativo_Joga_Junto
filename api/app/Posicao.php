<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Posicao extends Model
{
  use SoftDeletes;
  protected $table = 'posicoes';
  protected $fillable = ['id', 'nome', 'esporte_id'];
  protected $dates = ['created_at', 'updated_at', 'deleted_at'];

  public function esporte(){
    return $this->belongsTo('App\Esporte');
  }

  public function usuarios(){
    return $this->belongsToMany('App\Usuario', 'usuario_posicao', 'posicao_id', 'usuario_id');
  }

}
