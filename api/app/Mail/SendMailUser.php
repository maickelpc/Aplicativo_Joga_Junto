<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Usuario;

class SendMailUser extends Mailable
{
    use Queueable, SerializesModels;

    public $usuario;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($usuario)
    {
        $this->usuario = $usuario;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
      $this->usuario = new Usuario();
        return $this->subject("Confirmação de Cadastro")
        ->view('email.teste')->with('usuario', $this->usuario);
    }
}
