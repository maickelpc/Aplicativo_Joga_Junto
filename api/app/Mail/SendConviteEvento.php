<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendConviteEvento extends Mailable
{
    use Queueable, SerializesModels;
    private $notificacao;
    private $evento;

    /**
     * Create a new message instance.
     *
     * @return void
     */
     public function __construct($notificacao, $evento)
     {
         $this->notificacao = $notificacao;
         $this->evento = $evento;
     }

    /**
     * Build the message.
     *
     * @return $this
     */
     public function build()
     {
       $esporte = $this->evento->esporte->nome;

         return $this->from('jogajuntoapp@gmail.com')
         ->subject("Convite para partida de $esporte")
         ->view('email.conviteEvento')
           ->with('evento', $this->evento)
           ->with('notificacao', $this->notificacao);
     }
}
