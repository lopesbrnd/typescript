class CARRO{
    marca : string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes(): string {
       return `marca do carro: ${this.marca}\n modelo: ${this.modelo}\n ano: ${this.ano}\n`
        }
    }

let carro1 = new CARRO('volkswagen', 'fusca', 1500)
console.log(carro1.detalhes())

//comando da questao
//Crie uma instância da classe Carro e preencha as propriedades marca, modelo e ano. Implemente um método que exiba essas informações no console.