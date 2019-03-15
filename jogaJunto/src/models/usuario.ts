import { Endereco } from './endereco'
import { Posicao } from './esporte'

class Usuario {

  nome: string
  sobrenome: string
  email: string
  dataNascimento: Date
  login: string
  senha: string
  idFacebook: string
  idGoogle: string
  score: number
  telefone: string
  endereco: Endereco
  latitude: string
  longitude: string

  posicoes : Posicao[]
}


export {Usuario}
