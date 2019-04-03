<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Esporte;
class Posicao extends JsonResource
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
          'esporte_id' => $this->esporte_id,
          'esporte' => Esporte::find($this->esporte_id),
          'created_at' => $this->created_at,
          'updated_at' => $this->updated_at,
          'deleted_at' => $this->deleted_at
        ];
    }
}
