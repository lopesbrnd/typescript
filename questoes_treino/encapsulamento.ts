class contabancaria{
    private _saldo : number;
    private _titular : string;

    constructor(saldo: number, titular:string){
        this._saldo = saldo
        this._titular = titular
    }
    public get saldo(): number {
        return this._saldo ;
      }
      public set titular(novotitular: string) {
        if (novotitular.length > 0) {
          this._titular = novotitular;
        } else {
          console.log("O nome não pode ser vazio.");
        }
      }
    depositar(valor:number){
        if (0 < valor )
        return this._saldo =valor + this._saldo
        else
        console.log('opa camarada')

    }
    sacar(valor:number){
        if (0 < valor && valor <= this._saldo)
            return this._saldo = this._saldo - valor;
        else
            console.log('opa camarada')
        
    }
    detalhes(): string{
        return `titular: ${this._titular} saldo atual: ${this._saldo}`
    }
}
let joaozinho = new contabancaria(289387, 'joaozinho')
console.log(joaozinho.detalhes())
console.log('se joaozinho depositar 10000 conto ele tera')
console.log(joaozinho.depositar(10000))
console.log('se jaozinho sacar 10000 conto ele tera')
console.log(joaozinho.sacar(10000))


// Comando da questao
// 3.2 Crie uma classe chamada ContaBancaria com propriedades privadas 
// saldo e titular. Adicione métodos para depositar, sacar e consultar
// o saldo, garantindo que o saldo não seja acessado diretamente.