<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Estado;

class Cidade extends Model
{
  protected $table = 'cidades';
  protected $fillable = ['id', 'nome', 'codigoIbge', 'estado_id'];
  protected $dates = ['created_at', 'updated_at'];

  public function estado(){
    return $this->belongsTo(Estado, 'estado_id');
  }



}
