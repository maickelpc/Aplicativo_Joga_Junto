<?php

namespace App;
use App\Posicao;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Model;

class Esporte extends Model
{
  use SoftDeletes;
  protected $table = 'esportes';
  protected $fillable = ['id', 'nome', 'descricao', 'imagem', 'qtdMinimo', 'qtdMaximo'];
  protected $dates = ['created_at', 'updated_at', 'deleted_at'];

  public function posicoes(){
    return $this->hasMany('App\Posicao', 'esporte_id');
  }

  public function locais(){
    return $this->belongsToMany('App\Local', 'local_esporte', 'esporte_id', 'local_id');
  }
}
