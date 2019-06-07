import { Local } from './local'
import { Usuario } from './usuario'
import { Esporte } from './esporte'

class Evento {
  id:number
  dataRealizacao : Date
  horario : string
  descricao : string
  vagas : number
  publico : boolean
  valorCusto : number
  dataCancelamento: Date
  justificativaCancelamento : string
  local : Local
  usuarioResponsavel : Usuario
  esporte : Esporte

  participantes: UsuarioEvento[]
  constructor(){
    this.esporte = new Esporte();
    this.local = new Local();
  }
}

class UsuarioEvento{
  id: number
  usuario : Usuario
  evento : Evento
  local: Local
  situacao : string
  dataConfirmacao : Date
  dataCancelamento : Date
  dataExclusao : Date
  dataPagamento : Date
  justificativa : string

}


class Avaliacao{

  usuarioAvaliado : UsuarioEvento
  UsuarioAvaliador : Usuario
  score : number
  texto : string

}

enum EventoSituacao {
    PENDENTE,
    CONFIRMADO,
    CANCELADO,
    EXCLUIDO,
    FALTOU,
    COMPARECEU,
    QUITADO
}

export { Evento, UsuarioEvento, Avaliacao, EventoSituacao }
