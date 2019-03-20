<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

use App\Pais;
use App\Cidade;

class Estado extends Model
{
  protected $table = 'estados';
  protected $fillable = ['id', 'nome', 'sigla', 'pais_id'];
  protected $dates = ['created_at', 'updated_at'];

  public function cidades(){
    return $this->hasMany(Cidade);
  }

  public function pais(){
    return $this->belongsTo(Pais, 'pais_id');
  }

}
