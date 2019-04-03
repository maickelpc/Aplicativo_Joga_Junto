<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Usuario;
use App\Endereco;
class Local extends JsonResource
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
          'usuarioResponsavel_id' => $this->usuarioResponsavel_id,
          'usuarioResponsavel' => Usuario::find($this->usuarioResponsavel_id),
          'endereco_id' => $this->endereco_id,
          'endereco' => Endereco::find($this->endereco_id),
          'descricao' => $this->descricao,
          'latitude' => $this->latitude,
          'longitude' => $this->longitude,
          'imagem' => $this->imagem,
          'telefone' => $this->telefone,
          'horarioAtendimento' => $this->horarioAtendimento,
          'valido' => $this->valido,
          'comoChegar' => $this->comoChegar,
          'created_at' => $this->created_at,
          'updated_at' => $this->updated_at,
          'deleted_at' => $this->deleted_at
        ];
    }
}
