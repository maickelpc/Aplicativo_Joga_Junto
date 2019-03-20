<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Estado;

class Pais extends Model
{
    protected $table = 'pais';
    protected $fillable = ['id', 'nome', 'sigla', 'ddi'];
    protected $dates = ['created_at', 'updated_at'];

    public function estads(){
      return $this->hasMany('App\Estado');
    }
}
