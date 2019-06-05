<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Bem vindo ao JogaJunto</title>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    </head>
    <body>
      <!-- Begin page content -->
       <main role="main" class="container">
         <h1 class="mt-5">{{$notificacao->mensagem}} !!!</h1>
         <p><strong>Data: </string>{{$evento->dataRealizacao->format('d/m/Y')}} {{$evento->horario}}h</p>
         <p><strong>Local: </string>{{$evento->local->nome}}</p>
           <br>
         {{-- <p><a class="btn btn-primary btn-block" href="">Clique aqui para Confirmar Participação</a></p>
         <p><a class="btn btn-primary btn-block" href="">Clique aqui para Recusar Convite</a></p> --}}

         <p><h2>Acesso o JogaJunto para confirmar!!!</h></p>
         <p><a class="btn btn-primary btn-block" href="">Clique aqui para Recusar Convite</a></p>

       </main>
    </body>
</html>
