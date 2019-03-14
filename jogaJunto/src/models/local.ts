import { Usuario } from './usuario'
import { Esporte } from './esporte'
import { Endereco } from './endereco'

class Local {

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


}


export { Local }
