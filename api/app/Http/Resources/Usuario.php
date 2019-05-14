<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Endereco;
use App\Cidade;
class Usuario extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
          'id' => $this->id,
          'nome' => $this->nome,
          'mensagem' => $this->mensagem,
          'sobrenome' => $this->sobrenome,
          'email' => $this->email,
          'login' => $this->login,
          'score' => $this->score,
          'telefone' => $this->telefone,
          'latitude' => $this->latitude,
          'longitude' => $this->longitude,
          'email_verified_at' => $this->email_verified_at,
          'endereco' => Endereco::with(['cidade', 'cidade.estado'])->find($this->endereco_id),
          'posicoes' => $this->posicoes,
          'created_at' => $this->created_at,
          'updated_at' => $this->updated_at
        ];
    }
}
