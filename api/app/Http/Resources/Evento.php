<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Evento extends JsonResource
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
            'horario' => $this->horario,
            'descricao' => $this->descricao,
            'vagas' => $this->descricao,
            'publico' => $this->publico,
            'valorCusto' => $this->valorCusto,
            'justificativaCancelamento' => $this->justificativaCancelamento,
            'esporte' => $this->esporte,
            'local' => $this->local,
            'dataRealizacao' => $this->dataRealizacao,
            'dataCancelamento' => $this->dataCancelamento,
            'usuarioResponsavel' => $this->usuarioResponsavel,
            'participantes' => $this->participantes,
        ];
    }
}
