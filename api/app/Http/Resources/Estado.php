<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Estado extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
        'id' => $this->id,
        'nome' => $this->nome,
        'sigla' => $this->sigla,
        'pais_id' => $this->pais_id,
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at
        ];
    }
}
