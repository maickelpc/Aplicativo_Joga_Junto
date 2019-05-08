import { Local } from './local'
import { Usuario } from './usuario'
import { Esporte } from './esporte'

class Evento {
  data : Date
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

}

class UsuarioEvento{
  usuario : Usuario
  evento : Evento
  local: Local
  situacao : EventoSituacao
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
