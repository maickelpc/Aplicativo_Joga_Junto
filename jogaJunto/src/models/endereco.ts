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


}

class Cidade {
  id : number
  nome: string
  codigoIbge:string
  estado:Estado
  created_at : Date
  updated_at : Date
  deleted_at: Date
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

}

export { Pais, Estado, Cidade, Endereco }
