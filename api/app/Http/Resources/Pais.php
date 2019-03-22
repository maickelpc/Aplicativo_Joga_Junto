<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Estado;
class Pais extends JsonResource
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
        'ddi' => $this->ddi,
        'estados' => Estado::where('pais_id', $this->id)->get(),
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
        'deleted_at' => $this->deleted_at
        ];
    }
}
