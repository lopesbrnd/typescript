// Classe Livro
class Livro {
  private titulo: string;
  private autor: string;
  private preco: number;

  // Construtor
  constructor(titulo: string, autor: string, preco: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.preco = preco;
  }

  // Método descrição
  descricao(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Preço: R$${this.preco.toFixed(2)}`;
  }

  // Getters e Setters
  getTitulo(): string {
    return this.titulo;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  getAutor(): string {
    return this.autor;
  }

  setAutor(autor: string): void {
    this.autor = autor;
  }

  getPreco(): number {
    return this.preco;
  }

  setPreco(preco: number): void {
    this.preco = preco;
  }
}

// Classe Biblioteca
class Biblioteca {
  livros: Livro[];

  constructor() {
    this.livros = [];
  }

  // Método para adicionar livros
  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  // Método para listar os livros
  listarLivros(): void {
    if (this.livros.length === 0) {
      console.log("A biblioteca está vazia.");
    } else {
      console.log("Lista de livros na biblioteca:");
      this.livros.forEach(livro => {
        console.log(livro.descricao());
      });
    }
  }
}

// Subclasse LivroDigital
class LivroDigital extends Livro {
  private formato: string;

  // Construtor
  constructor(titulo: string, autor: string, preco: number, formato: string) {
    super(titulo, autor, preco); // Chama o construtor da classe base (Livro)
    this.formato = formato;
  }

  // Sobrescreve o método descricao
  descricao(): string {
    return `${super.descricao()}, Formato: ${this.formato}`;
  }

  // Getter e Setter para o formato
  getFormato(): string {
    return this.formato;
  }

  setFormato(formato: string): void {
    this.formato = formato;
  }
}

// Teste da implementação

// Criação da Biblioteca
const minhaBiblioteca = new Biblioteca();

// Criação de livros
const livro1 = new Livro("O Alquimista", "Paulo Coelho", 39.90);
const livro2 = new Livro("A Arte da Guerra", "Sun Tzu", 25.50);
const livroDigital1 = new LivroDigital("O Hobbit", "J.R.R. Tolkien", 29.90, "PDF");
const livroDigital2 = new LivroDigital("Dom Casmurro", "Machado de Assis", 19.90, "EPUB");

// Adicionando livros na biblioteca
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livroDigital1);
minhaBiblioteca.adicionarLivro(livroDigital2);

// Listando os livros da biblioteca
minhaBiblioteca.listarLivros();

// Modificando valores dos livros utilizando getters e setters
livro1.setPreco(45.00);
livro2.setTitulo("O Príncipe");
livroDigital1.setFormato("EPUB");

// Listando novamente os livros para verificar as modificações
console.log("\nApós modificações:");
minhaBiblioteca.listarLivros();
