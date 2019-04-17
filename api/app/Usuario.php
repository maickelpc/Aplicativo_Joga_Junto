<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Endereco;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Usuario extends Authenticatable
{
  use SoftDeletes;
  protected $table = 'usuarios';
  protected $fillable = [
    'id',
    'endereco_id',
    'nome',
    'sobrenome',
    'email',
    'login',
    'score',
    'telefone',
    'latitude',
    'longitude'];
  protected $dates = ['dataNascimento','created_at', 'updated_at', 'deleted_at'];

  protected $hidden = [
      'senha', 'idFacebook', 'idGoogle',
  ];

  public function endereco(){
    return $this->belongsTo(Endereco, 'endereco_id');
  }

  public function posicoes(){
    return $this->belongsToMany('App\Posicao', 'usuario_posicao', 'usuario_id', 'posicao_id');
  }

  public function eventos(){
    return $this->hasMany('App\UsuarioEvento', 'usuario_id');
  }

  public function notificacoes(){
    return $this->hasMany('App\Notificacao', 'usuario_id');
  }

  public function notificacoesEnviadas(){
    return $this->hasMany('App\Notificacao', 'usuario_envio_id');
  }

}
