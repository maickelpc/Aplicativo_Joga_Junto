<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Usuario;
class Notificacao extends JsonResource
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
          'titulo' => $this->titulo,
          'mensagem' => $this->mensagem,
          'dataLeitura' => $this->dataLeitura,
          'usuario' => Usuario::find($this->usuario_id),
          'usuarioEnvio' => Usuario::find($this->usuario_envio_id),
          'created_at' => $this->created_at,
          'updated_at' => $this->updated_at
        ];
    }
}
