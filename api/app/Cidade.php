<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Estado;

class Cidade extends Model
{
  use SoftDeletes;
  protected $table = 'cidades';
  protected $fillable = [
    'id',
    'nome',
    'codigoIbge',
    'estado_id'];

    protected $dates = [
      'created_at',
      'updated_at',
      'deleted_at'];

      public function estado(){
        return $this->belongsTo('App\Estado', 'estado_id');
      }



    }
