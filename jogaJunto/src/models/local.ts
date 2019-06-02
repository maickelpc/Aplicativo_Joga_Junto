import { Usuario } from './usuario'
import { Esporte } from './esporte'
import { Endereco } from './endereco'

class Local {
  id: number
  nome : string
  descricao : string
  endereco : Endereco
  latitude : string
  longitude: string
  referencia : string
  comoChegar : string
  imagem : string
  telefone : string
  horarioAtendimento : string
  usuarioResponsavel : Usuario
  valido : boolean
  esportes : Esporte[]

  constructor(){
    this.id = 0;
    this.endereco = new Endereco();
  }
}


export { Local }
