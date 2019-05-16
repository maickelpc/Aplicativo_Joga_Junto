<?php

namespace App\Http\Resources;

use App\Posicoes;
use Illuminate\Http\Resources\Json\JsonResource;
class Esporte extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      if($request->get('withPositions') == 1){
        return [
          'id' => $this->id,
          'nome' => $this->nome,
          'descricao' => $this->descricao,
          'imagem' => $this->imagem,
          'qtdMinimo' => $this->qtdMinimo,
          'qtdMaximo' => $this->qtdMaximo,
          'posicoes' => $this->posicoes
        ];
      }else
        return [
          'id' => $this->id,
          'nome' => $this->nome,
          'descricao' => $this->descricao,
          'imagem' => $this->imagem,
          'qtdMinimo' => $this->qtdMinimo,
          'qtdMaximo' => $this->qtdMaximo,
          'created_at' => $this->created_at,
          'updated_at' => $this->updated_at,
          'deleted_at' => $this->deleted_at
        ];
    }
}
