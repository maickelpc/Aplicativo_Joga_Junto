<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UsuarioEvento extends Model
{
  use SoftDeletes;
  protected $table = 'usuario_evento';
  protected $fillable = [
    'id',
    'usuario_id',
    'evento_id',
    'situacao',
    'justificativa'];

  protected $dates = [
    'dataConfirmacao',
    'dataCancelamento',
    'dataExclusao',
    'dataPagamento',
    'created_at', 'updated_at', 'deleted_at'];

    public function usuario(){
      return $this->belongsTo('App\Usuario', 'usuario_id');
    }

    public function evento(){
      return $this->belongsTo('App\Evento', 'evento_id');
    }
}
