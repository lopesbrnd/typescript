class pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
       this.nome = nome;
       this.idade = idade;
    }

    cumprimentar(): string {
        return `ola meu nome eh ${this.nome} e eu tenho ${this.idade} anos`
    }
}
class aluno extends pessoa {
    matricula : number
    constructor(nome: string, idade: number, matricula : number) {
       super(nome,idade);
       this.matricula = matricula;
    }
    estudar(): string{
        return `minha matricula eh ${this.matricula}`
    }
}
let bernardo = new aluno('bernardo', 16, 20231144010068)
console.log(bernardo.cumprimentar())
console.log(bernardo.estudar())

//comando da questao 
// 4.2 Crie uma classe Pessoa com as propriedades nome e idade e um método cumprimentar().
// Em seguida, crie uma classe Aluno que herda de Pessoa e adiciona uma propriedade matricula e um método estudar().