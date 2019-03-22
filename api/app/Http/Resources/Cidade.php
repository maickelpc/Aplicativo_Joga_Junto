<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Estado;
class Cidade extends JsonResource
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
          'codigoIbge' => $this->codigoIbge,
          'estado_id' => $this->estado_id,
          'estado' => Estado::with('pais')->find($this->estado_id),
          'created_at' => $this->created_at,
          'updated_at' => $this->updated_at,
          'deleted_at' => $this->deleted_at
        ];
    }
}
