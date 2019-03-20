<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cidade;
use Illuminate\Database\Eloquent\SoftDeletes;

class Endereco extends Model
{
  use SoftDeletes;
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

  protected $dates = ['created_at', 'updated_at', 'deleted_at'];

  public function cidade(){
    return $this->belongsTo(Cidade, 'cidade_id');
  }
}
