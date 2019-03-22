<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Cidade;

class Endereco extends JsonResource
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
        'cidade_id' => $this->cidade_id,
        'cidade' => Cidade::with(['estado','estado.pais'])->find($this->cidade_id),
        'logradouro' => $this->logradouro,
        'bairro' => $this->bairro,
        'numero' => $this->numero,
        'cep' => $this->cep,
        'complemento' => $this->complemento,
        'referencia' => $this->referencia,

        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
        'deleted_at' => $this->deleted_at
      ];
    }
}
