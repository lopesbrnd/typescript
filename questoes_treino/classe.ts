class produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number ) {
        this.nome = nome;
        this.preco = preco;
    }
    desconto(): number {
        return this.preco *0.7
    }
    print(): string {
       return `Nome do produto: ${this.nome}\nPreco sem disconto: ${this.preco}\n`
    }
}
let produto1 = new produto("como pegar mestre facil", 200);
console.log(produto1.print())
console.log('preco atualizado abaixo')
console.log(produto1.desconto())

// comando da questao
// Crie uma classe chamada Produto com as seguintes propriedades: nome, preco e um método chamado desconto() que aplica um desconto percentual no preço do produto.