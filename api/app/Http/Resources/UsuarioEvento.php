<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Usuario;
use App\Evento as EventoModel;
use App\Local;

class UsuarioEvento extends JsonResource
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
            'usuario' => Usuario::where('id', $this->usuario_id)->first(),
            'evento' => EventoModel::where('id', $this->evento_id)->first(),
            'local' => Local::where('id', $this->evento->local_id)->first(),
            'situacao' => $this->situacao,
            'dataConfirmacao' => $this->dataConfirmacao,
            'dataCancelamento' => $this->dataCancelamento,
            'dataExclusao' => $this->dataExclusao,
            'dataPagamento' => $this->dataPagamento,
            'justificativa' => $this->justificativa,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at
        ];
    }
}
