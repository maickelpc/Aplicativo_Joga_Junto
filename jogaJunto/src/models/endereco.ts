class Pais {

  nome: string
  sigla:string
  ddi:string

}

class Estado {

  nome: string
  sigla:string
  pais: Pais

}

class Cidade {

  nome: string
  codigoIbge:string
  estado:Estado

}

class Endereco{

  logradouro: string
  bairro: string
  numero : string
  cep: string
  complemento : string
  referencia : string
  cidade : Cidade

}

export { Pais, Estado, Cidade, Endereco }
