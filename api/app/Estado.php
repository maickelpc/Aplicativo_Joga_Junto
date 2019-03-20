<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Pais;
use App\Cidade;

class Estado extends Model
{
  use SoftDeletes;
  protected $table = 'estados';
  protected $fillable = ['id', 'nome', 'sigla', 'pais_id'];
  protected $dates = ['created_at', 'updated_at', 'deleted_at'];

  public function cidades(){
    return $this->hasMany(Cidade, 'estado_id');
  }

  public function pais(){
    return $this->belongsTo('App\Pais', 'pais_id');
  }

}
