import { Endereco } from './endereco'
import { Posicao } from './esporte'

class Usuario {
  id: number
  nome: string
  sobrenome: string
  email: string
  dataNascimento: Date
  username: string
  password: string
  idFacebook: string
  idGoogle: string
  score: number
  telefone: string
  endereco: Endereco
  latitude: number
  longitude: number
  posicoes : Posicao[]
  created_at : Date
  updated_at : Date
  deleted_at: Date
  email_verified_at: Date
  imagem: string

  exp : Number
  token: string

  constructor(){
    this.dataNascimento = new Date();
    this.endereco = new Endereco();
  }
}


export {Usuario}
