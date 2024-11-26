class conta{
    private _saldo:number;
    constructor(saldo:number){
        this._saldo = saldo
    }
    public get saldo(): number{
        return this._saldo 
    }
    depositar(valor:number){
        if (0 < valor )
            return this._saldo =valor + this._saldo
            else
            console.log('opa camarada')
    }
    consultarsaldo():number{
        return this._saldo
    }
}
class poupanca extends conta{
    taxa: number
    constructor(saldo:number, taxa:number){ 
        super(saldo)
        this.taxa = taxa
    }
    depositar(): number{
        return (this.taxa * this.saldo) + this.saldo
    }
}
let porquinhointer = new poupanca(100000,0.1)
let contanubank = new conta(100000)
console.log(porquinhointer.depositar())
console.log(contanubank.depositar(5000))
