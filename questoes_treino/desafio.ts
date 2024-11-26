class veiculo {
    private _quebrado : boolean;
    protected modelo :  string;
    protected ano : number;

    constructor(quebrado: boolean, modelo :  string, ano : number){
        this._quebrado = quebrado;
        this.modelo = modelo;
        this.ano = ano;
    }
    public get quebrado(): boolean {
        return this._quebrado ;
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
    detalhes():string{
       return `o veiculo esta quebrado? ${this._quebrado} modelo do veiculo: ${this.modelo} ano do veiculo ${this.ano} `

    }
}
class carro extends veiculo{ 
    constructor(quebrado: boolean, modelo: string, ano : number){
        super(quebrado , modelo, ano)

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
    constructor(quebrado: boolean, modelo: string, ano : number){
        super(quebrado , modelo, ano)

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
    constructor(quebrado: boolean, modelo: string, ano : number){
        super(quebrado , modelo, ano)

    }
    som(): string{
        return `barco faz zzzzzzz`
    }
    local(): string{
        return `o barco funciona na agua`
    }
    rodas(): number{
        return 0 
    }
    
}
class aviao extends veiculo{ 
    constructor(quebrado: boolean, modelo: string, ano : number){
        super(quebrado , modelo, ano)

    }
    som(): string{
        return `o aviao faz zuuuuumm`
    }
    local(): string{
        return `o aviao funciona no ar`
    }
    rodas(): number{
        return 18 
    } 
}

let fuscazul = new carro( false,'fusca', 1990)
let cinquentinha = new moto( true,'cinquenta cilindros', 1995)
let cruzeirodoneymar = new barco( false, 'cruzeiro', 2023)
let aviaodopalmeiras = new aviao( false,'Embraer E-190-E2', 2023)

console.log(fuscazul.detalhes())
console.log(fuscazul.som())
console.log(fuscazul.local())
console.log('quantidade de rodas:')
console.log(fuscazul.rodas())

console.log(cinquentinha.detalhes())
console.log(cinquentinha.som())
console.log(cinquentinha.local())
console.log('quantidade de rodas:')
console.log(cinquentinha.rodas())

console.log(cruzeirodoneymar.detalhes())
console.log(cruzeirodoneymar.som())
console.log(cruzeirodoneymar.local())
console.log('quantidade de rodas:')
console.log(cruzeirodoneymar.rodas())

console.log(aviaodopalmeiras.detalhes())
console.log(aviaodopalmeiras.som())
console.log(aviaodopalmeiras.local())
console.log('quantidade de rodas:')
console.log(aviaodopalmeiras.rodas())