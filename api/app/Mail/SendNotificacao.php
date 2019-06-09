<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendNotificacao extends Mailable
{
    use Queueable, SerializesModels;
    private $notificacao;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($notificacao)
    {
        $this->notificacao = $notificacao;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
      return $this->from('jogajuntoapp@gmail.com')
       ->subject($this->notificacao->titulo)
       ->view('email.notificacao')
         ->with('notificacao', $this->notificacao);
    }
}
