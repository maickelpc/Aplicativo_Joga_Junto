<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Estado;

class Pais extends Model
{
    protected $table = 'paises';
    protected $fillable = ['id', 'nome', 'sigla', 'ddi'];
    protected $dates = ['created_at', 'updated_at'];

    public function estados(){
      return $this->hasMany(Estado);
    }
}
