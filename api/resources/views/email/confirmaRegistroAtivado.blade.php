<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Bem vindo ao JogaJunto</title>

    </head>
    <body>
      <!-- Begin page content -->
       <main role="main" class="container">
         <h1 class="mt-5">{{$usuario->nome}} Obrigado por confirmar seu email</h1>
         <p class="lead">Agora já pode concluir seu cadastro e usar os recursos do JogaJunto com seus amigos! <br>
       </main>
    </body>
</html>
