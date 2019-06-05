# projeto-integrador-mobile
Projeto Integrador em mobile

    1 Introdução

O dia-a-dia atarefado oferece poucas oportunidades para manter contato com grupos de pessoas quem tem gostos em comum, fazendo com que muitas vezes se perca a motivação de praticar atividades esportivas em grupos, que dependem que alguém se proponha a organizar os encontros.
A organização do encontro de um grupo é uma atividade árdua, pois consome tempo para entrar em contato com os participantes do encontro, cobrar a confirmação, ratear os custos e ainda haverá a cobrança por uma melhor organização do evento. Para que esse momento de lazer não se torne mais um fator estressante na rotina, a tecnologia vem como uma ferramenta para desonerar o organizar de várias dessas tarefas, e até mesmo dividir esse trabalho em mais de uma pessoa.
A prática de esportes coletivos é recomendada por especialistas da área de saúde, pois além de contribuir para a saúde física, é muito importante como uma ferramenta para relaxar a mente com algo prazeroso. O software apresentado neste trabalho acadêmico tem como objetivo ser facilitador da organização de práticas de esportes coletivos, auxiliando o organizador a manter contato com os membros, disponibilizar listagem de participantes confirmados para todos os envolvidos, diminuindo a carga de informações solicitadas, ajudando no rateio de valores, e também na interação pós-evento dos membros.

        1.1 Objetivo Geral
Criar um produto de software no formato de um aplicativo para Android que ajude as pessoas a organizarem eventos esportivos de maneira simples.

        1.2 Objetivos Específicos
Fornecer uma ferramenta para que o usuário possa buscar em toda sua lista de contatos, bem como em locais próximos de sua localização, pessoas para praticar esportes coletivos em uma data e local definidos.
Oferecer uma forma de pessoas que possuem poucos contatos, ou que simplesmente queiram praticar uma atividade esportiva, mas não possuem grupos para tal naquele momento, possam buscar em sua região partidas agendadas que estejam abertas a receber novos participantes.

        1.3 Metodologias
A pesquisa pode ser considerada bibliográfica e documental, pois existe a necessidade de adquirir informações a respeito do uso das tecnologias na área esportiva.
Para o desenvolvimento do aplicativo Joga Junto, será escrita uma API (Application Programming Interface) na linguagem PHP versão 7, utilizando o framework Laravel na versão 5.7. Os dados serão armazenados em um SGBD (Sistema gerenciador de banco de dados) PostgreSQL versão 11, e para o aplicativo utilizado Android nativo, com a ferramenta Android Studio.
A documentação será desenvolvida utilizando a linguagem visual UML, com a ferramenta Astah (versão estudante), e o banco de dados será modelado em Mysql Workbench.
A escolha por criar uma API para concentrar o processamento e armazenamento dos dados, tem o objetivo de diminuir o uso de recursos dos dispositivos móveis, e a futura disponibilização dos dados em outras plataformas. Além disso, há a necessidade de compartilhamento de informações entre os usuários, alertas de notificações e histórico de avaliações.
De acordo com Gomes (2019), bancos de dados relacionais têm a função de armazenar e relacionar informações através de campos chave em tabelas distintas. Devido à estimativa de volume de dados, optou-se pelo uso do PostgreSQL, por ser reconhecidamente uma ferramenta robusta, Open source, e a linguagem plpgsql oferece inúmeros recursos para criação de funções e procedures que ajudarão a garantir a qualidade do produto. Além disso, conta com uma comunidade muito atuante, que proporciona fácil acesso a soluções para quaisquer desafios encontrados no desenvolvimento.
O trabalho do pré-processamento das informações será executado em ambiente web, utilizando o framework Laravel, com a linguagem PHP. A opção por esta, entre várias alternativas, se dá por ser uma linguagem de fácil acesso, vasto suporte, que permite alto escalonamento da aplicação. De acordo com Otwell ([2019]), Laravel é um framework que dá suporte a uma série de funções de base, como um ORM (Object Relation Mapping), envio de e-mail, controle de autenticação, segurança de nível acesso, e tudo isso com uma estrutura MVC (Model View Controlller) muito bem definida, que faz bom uso dos principais padrões de projeto.



    2 TRABALHOS RELACIONADOS
        2.1 CHEGA + 
O Chega+ é o aplicativo para organizar grupos de futebol mais bem avaliado entre os encontrados. Permite que todos os jogadores do grupo participem da administração das partidas. Conta com recursos como confirmação de presença, sorteio de times, atribuição de notas aos jogadores, controle financeiro entre outros. (CHEGAMAISAPP.COM, 2019)

Figura 1 - APLICATIVO CHEGA +

        2.2 DONO DA BOLA
Dono da bola é um aplicativo facilitador para o organizador da pelada, oferece funções como inserir contatos da lista, despesas, controle de recebimento, e ainda um recurso interessante de envio de e-mail com informações sobre última pelada jogada para os demais jogadores. O aplicativo é disponibilizado apenas na plataforma IOS (APPLESTORE, 2018).

Figura 2 - APLICATIVO DONO DA BOLA

        2.3 PELADEIROS
Peladeiros, assim como os demais, foca na gestão do evento esportivo. O que o difere dos demais são os recursos disponíveis, pois conta com funções básicas como criação de times, controle financeiro, artilharia, histórico e outros recursos mais avançados como distribuição de jogadores por nível técnico para equilíbrio das equipes, criação de grupos, envio de SMS para a lista dos envolvidos com avisos relacionados ao evento. Um ponto importante é que não conta com lista de confirmação de presentes. (PELADEIROS, 2019)

Figura 3 - aplicativo peladeiros i

Figura 4 - aplicativo peladeiros ii

        2.4 Considerações Finais
Analisando as soluções que tem propósito semelhante ao projeto, alguns pontos diferem, como no caso do Peladeiros, que possui uma série de funcionalidades na modalidade gratuita, mas não possui confirmação, e este é um recurso que em grupos pequenos tem grande importância.
No caso do Aplicativo Dono da Bola, a facilidade e simplicidade se destacam, bem como a clareza das informações apresentadas, no entanto atende apenas o público que dispõe de dispositivos com sistema IOS.
Já o Aplicativo Chega+ possui recursos necessários para organização de partidas entre amigos, o ponto baixo desse aplicativo é a execução, uma vez que possui muitas reclamações sobre funções simples, como sorteio de equipes.
O aplicativo proposto irá possibilitar a interação entre jogadores e organizadores que não se conhecem, não possuem contatos para encontrar eventos e jogadores disponíveis na região, função que os aplicativos analisados não apresentam. 





    3 TECNOLOGIAS UTILIZADAS

        3.1 APLICATIVO ANDROID

            3.1.1 Ionic 3
Framework de desenvolvimento de aplicações híbridas, onde com apenas um código fonte, pode-se criar aplicações para Android, IOS, Windows Phone e até mesmo para web.
Não é necessário possuir maquinas virtuais para testes, uma vez que a aplicação pode ser totalmente desenvolvida no browser, o que consome menos recursos que as aplicações nativas que requerem emuladores para desenvolver.
De acordo com o site oficial, http://ionicframework.com (2019), atualmente está na quarta versão, e em suas primeiras versões utilizava o AngularJS com os recursos nos navegadores.
A partir da versão 2.0, quando a Google lançou o novo Angular 2.0 que utiliza o TypeScript, que é um superset do Javascript, onde se desenvolve orientado a objetos, e então o código é compilado para javascript para ser executado.
Ionic se baseia em webcomponent, utilizando javascript, css e outros recursos comuns da web. Além disso, da versão 4 em diante, o Ionic permite que se desenvolva utilizando outros frameworks e bibliotecas como VueJS, React, jQuery etc, e portanto é enquadrado como um PWA, Progressive Web Application (WIEGERT, C.; LUCAS, E., 2019).

        3.2 API Web service

            3.2.1 PHP 7.2
Por razão de uma comunidade atuante e do fácil acesso a bases de conhecimento, o PHP é uma das linguagens mais populares quando o assunto é programação para a web. Desde seus primórdios, foi pensada para o uso rápido e prático. Por causa dessa filosofia, a sua fama passou a ser de uma linguagem com baixo nível de segurança e com muitos bugs. Com o passar do tempo a linguagem evoluiu e absorveu os paradigmas da programação orientada a objetos, e tornou-se uma robusta ferramenta para o desenvolvimento não só de websites, mas também de avançados sistemas dos mais variados temas.
A escolha pela linguagem se deve pela experiência que a equipe possui e pela vasta gama de ferramentas que a linguagem proporciona, de modo a facilitar o desenvolvimento da API. (PHP.NET, 2019)

            3.2.2 Laravel 5.7 
Em uma enorme gama de opções de frameworks PHP existentes, o Laravel se destaca como uma ótima opção para desenvolvimento de aplicações. Possui uma filosofia de “código elegante”, é favorável para um desenvolvimento organizado e de fácil entendimento. Possui um ORM prático e poderoso que agiliza o desenvolvimento das entidades e seus relacionamentos mais complexos, e um roteamento de fácil configuração para implementação da API, além de um seguro módulo de autenticação que é extremamente necessário para o foco que a aplicação toma.
A escolha do framework se deve pela experiência que a equipe possui, e pela grande quantidade de ferramentas que já existem para o framework, visando facilitar o desenvolvimento, como Ferramentas de Mailer, Routing, ORM entre outras. (LARAVEL.COM, 2019)

            3.2.3 PostgreSQL 11
O PostgreSQL tem se destacado no mercado como um dos melhores e mais robustos sistemas gerenciadores de bancos de dados relacional, possuindo recursos muito importantes como controle de concorrência multi versão, que evita bloqueios de registros conhecidos como “lock”, isolamento de transações que evita que um usuário faça leitura de dados de outro usuário ainda não commitados. Além disso, possui licença BSD (Berkeley Software Distribution, considerado como de domínio público e pode ser modificado sem nenhuma restrição). (POSTGRESQL.ORG, 2019)

