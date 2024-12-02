export class funcionario {
   protected _nome : string;
   protected _cargo : string;
   protected _salario:number;

    constructor(nome:string,cargo:string,salario:number){
        this._nome = nome;
        this._cargo = cargo;
        this._salario = salario
    }
    get nome(): string { return this._nome; }
  
    set nome(nome: string) { this._nome = nome; }
  
    get cargo(): string { return this._cargo; }
  
    set cargo(cargo: string) { this._cargo = cargo; }
  
    get salario(): number { return this._salario; }

    descricao():string{
        return `nome: ${this._nome} cargo: ${this._cargo} salario ${this._salario}`
    }
    aplicarAumento(percentual: number){
        if (percentual > 0) {
            const valorComaumento = this.salario + (this._salario * percentual);
            this._salario += valorComaumento;
            console.log(` Salario atual: R$ ${this._salario.toFixed(2)}`);
          } else {
            console.log('porcentagem deve ser maior que zero.');
          }
    }
    
  
}