import { Endereco } from './endereco'
import { Posicao } from './esporte'

class Usuario {
  id: number
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
  created_at : Date
  updated_at : Date
  deleted_at: Date

  exp : Number
  token: string

  constructor(){
    this.dataNascimento = new Date()
  }
}


export {Usuario}
