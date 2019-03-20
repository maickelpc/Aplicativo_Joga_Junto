<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Estado;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pais extends Model
{
    use SoftDeletes;
    protected $table = 'paises';
    protected $fillable = ['id', 'nome', 'sigla', 'ddi'];
    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    public function estados(){
      return $this->hasMany('App\Estado');
    }
}
