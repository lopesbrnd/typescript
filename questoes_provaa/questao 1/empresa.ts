import { funcionario } from "./funcionario";
export class empresa{
    private _nome : string;
  

    constructor(nome : string){
        this._nome = nome
    }
    get nome(): string { return this._nome; }
    set nome(nome: string) { this._nome = nome; }

    private funcionarios: funcionario[] = [];
    adicionarfuncionarios(vetor: funcionario[]) : void {
        vetor.forEach(funcionario => {
            console.log(funcionario.descricao());;
        });        
       
    }
    }
