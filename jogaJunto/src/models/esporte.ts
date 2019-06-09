import { Usuario } from './usuario'

class Esporte {
  id: number
  nome : string
  descricao : string
  imagem : string
  qtdMinimo : number
  qtdMaximo: number
  posicoes: Posicao[]

}

class Posicao{
  id: number
  nome: string
  descricao : string
  esporte : Esporte
  usuarios: Usuario[]
  esporte_id: number
}

export { Esporte, Posicao }
