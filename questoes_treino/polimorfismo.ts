class animal{
    nome : string
    
    constructor(nome:string){
        this.nome = nome
    }
    falar(): string{
        return `(som do animal)`
    }
    meunome(){
        return `${this.nome} diz:`
    }
}
class gato extends animal{
    constructor(nome:string){
    super(nome)
    }
    public falar(): string {
        return `miauuu`
    }
}
class cachorro extends animal{
    constructor(nome:string){
        super(nome)
        }
        public falar(): string {
            return `auauauuu`
        }
}
let cao1 = new cachorro('rock')
let gato1 = new gato('chico')
console.log(cao1.meunome())
console.log(cao1.falar())
console.log(gato1.meunome())
console.log(gato1.falar())

//comando da questao
// 5.2 Crie uma classe Animal com um método falar(). Em seguida,
// crie classes derivadas Cachorro e Gato que sobrescrevam o método 
// falar() para comportamentos específicos de cada animal.