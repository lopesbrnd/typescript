public set quebrado(quebrado1: boolean) {
    if (quebrado1 = false) {
      this.quebrado = quebrado1;
    } else {
      console.log("O veiculo esta quebrado e nao funciona :(");
    }
  }
som(): string{
    return `o veiculo faz um som`
}
local(): string{
    return `o veiculo funciona em um local`
}
rodas(): number{
    return 0 
}
}
class carro extends veiculo{
modelo: string
ano : number

constructor(modelo: string, ano : number, quebrado: boolean){
    super(quebrado)
    this.modelo = modelo
    this.ano = ano
}
som(): string{
    return `o carro faz vrum`
}
local(): string{
    return `o carro funciona na terra`
}
rodas(): number{
    return 4 
}
}
class moto extends veiculo{
modelo: string
ano : number

constructor(modelo: string, ano : number, quebrado: boolean){
    super(quebrado)
    this.modelo = modelo
    this.ano = ano
}
som(): string{
    return `a moto faz vrum`
}
local(): string{
    return `a moto funciona na terra`
}
rodas(): number{
    return 2 
}
}
class barco extends veiculo{
modelo: string
ano : number

constructor(modelo: string, ano : number, quebrado: boolean){
    super(quebrado)
    this.modelo = modelo
    this.ano = ano
}
som(): string{
    return `o barco faz zzzzzz`
}
local(): string{
    return `o barco funciona na agua`
}
rodas(): number{
    return 0 
}
}
class aviao extends veiculo{
modelo: string
ano : number

constructor(modelo: string, ano : number, quebrado: boolean){
    super(quebrado)
    this.modelo = modelo
    this.ano = ano
}
som(): string{
    return `o aviao faz zuuuuuum`
}
local(): string{
    return `o aviao funciona no ar`
}
rodas(): number{
    return 18 
}
detalhes():string{
    `som: ${}`

}


}
let fuscazul = new carro('fusca', 1990, false)
let cinquentinha = new moto('cinquenta cilindros', 1995, false)
let cruzeirodoneymar = new barco('cruzeiro', 2023, false)
let aviaodopalmeiras = new aviao('Embraer E-190-E2', 2023, false)