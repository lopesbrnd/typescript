class OBRA {
    private livro: string;
    private autor: string;
    private preco: number;

    constructor(livro: string, autor: string, preco: number ) {
        this.livro = livro;
        this.autor = autor;
        this.preco = preco;
    }

    descricao(): string {
        return `Livro: ${this.livro}\n Autor: ${this.autor}\n Preco: R$ ${this.preco}`
    }
}

let livro1 = new OBRA("como pegar mestre facil", "joao do capa", 200);
console.log(livro1.descricao());