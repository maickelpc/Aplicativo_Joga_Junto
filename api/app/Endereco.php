<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
  protected $table = 'enderecos';
  protected $fillable = [
    'id',
    'cidade_id',
    'logradouro',
    'bairro',
    'numero',
    'cep',
    'complemento',
    'referencia'];

  protected $dates = ['created_at', 'updated_at'];

  public function cidade(){
    return $this->belongsTo('App\Cidade', 'cidade_id');
  }
}
