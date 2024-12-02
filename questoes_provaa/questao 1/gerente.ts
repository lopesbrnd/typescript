import {funcionario} from './funcionario'
export class gerente extends funcionario{
   private _bonus : number
    constructor(nome:string,cargo:string,salario:number,bonus:number){
        super(nome,cargo,salario)
        this._bonus = bonus
    }
    get bonus(): number { return this._bonus; }
  
    set bonus(bonus: number) { 
        if(bonus<0)
        this._bonus = bonus;
        else
        console.log('opa rapaz o bonus nao pode ser negativo') 
    }

    descricao(): string {
        return `nome: ${this._nome} cargo: ${this._cargo} salario inicial: ${this._salario} bonus: ${this._bonus} salario total: ${this._bonus + this._salario}`
    }

}
