<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Local extends Model
{
  use SoftDeletes;
  protected $table = 'locais';
  protected $fillable = [
    'id',
    'nome',
    'descricao',
    'latitude',
    'longitude',
    'imagem',
    'telefone',
    'horarioAtendimento',
    'usuarioResponsavel_id',
    'valido',
    'enderedo_id',
    'comoChegar'];

  protected $dates = ['created_at', 'updated_at', 'deleted_at'];


  public function endereco(){
    return $this->belongsTo('App\Endereco', 'endereco_id');
  }

  public function esportes(){
    return $this->belongsToMany('App\Esporte', 'local_esporte', 'local_id', 'esporte_id');
  }
}
