import { Usuario } from './usuario'

class Esporte {

  nome : string
  descricao : string
  imagem : string
  qtdMinimo : number
  qtdMaximo: number
  posicoes: Posicao[]

}

class Posicao{
  descricao : string
  esporte : Esporte
  usuarios: Usuario[]
}

export { Esporte, Posicao }
