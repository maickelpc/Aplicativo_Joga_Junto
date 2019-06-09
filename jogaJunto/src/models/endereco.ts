class Pais {
  id: number
  nome: string
  sigla:string
  ddi:string
  created_at : Date
  updated_at : Date
  deleted_at: Date

}

class Estado {

  id : number
  nome: string
  sigla:string
  pais: Pais
  created_at : Date
  updated_at : Date
  deleted_at: Date
  cidades : Cidade[]

  constructor(){
    this.pais = new Pais();
  }

}

class Cidade {
  id : number
  nome: string
  codigoIbge:string
  estado:Estado
  created_at : Date
  updated_at : Date
  deleted_at: Date

  constructor(){
    this.estado = new Estado();
  }
}

class Endereco{
  id: number
  logradouro: string
  bairro: string
  numero : string
  cep: string
  complemento : string
  referencia : string
  cidade : Cidade
  created_at : Date
  updated_at : Date
  deleted_at: Date

  constructor(){
    this.cidade = new Cidade();
  }

}

export { Pais, Estado, Cidade, Endereco }
