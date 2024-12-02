var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe Livro
var Livro = /** @class */ (function () {
    // Construtor
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    // Método descrição
    Livro.prototype.descricao = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Autor: ").concat(this.autor, ", Pre\u00E7o: R$").concat(this.preco.toFixed(2));
    };
    // Getters e Setters
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Livro.prototype.getPreco = function () {
        return this.preco;
    };
    Livro.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    return Livro;
}());
// Classe Biblioteca
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    // Método para adicionar livros
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    // Método para listar os livros
    Biblioteca.prototype.listarLivros = function () {
        if (this.livros.length === 0) {
            console.log("A biblioteca está vazia.");
        }
        else {
            console.log("Lista de livros na biblioteca:");
            this.livros.forEach(function (livro) {
                console.log(livro.descricao());
            });
        }
    };
    return Biblioteca;
}());
// Subclasse LivroDigital
var LivroDigital = /** @class */ (function (_super) {
    __extends(LivroDigital, _super);
    // Construtor
    function LivroDigital(titulo, autor, preco, formato) {
        var _this = _super.call(this, titulo, autor, preco) || this; // Chama o construtor da classe base (Livro)
        _this.formato = formato;
        return _this;
    }
    // Sobrescreve o método descricao
    LivroDigital.prototype.descricao = function () {
        return "".concat(_super.prototype.descricao.call(this), ", Formato: ").concat(this.formato);
    };
    // Getter e Setter para o formato
    LivroDigital.prototype.getFormato = function () {
        return this.formato;
    };
    LivroDigital.prototype.setFormato = function (formato) {
        this.formato = formato;
    };
    return LivroDigital;
}(Livro));
// Teste da implementação
// Criação da Biblioteca
var minhaBiblioteca = new Biblioteca();
// Criação de livros
var livro1 = new Livro("O Alquimista", "Paulo Coelho", 39.90);
var livro2 = new Livro("A Arte da Guerra", "Sun Tzu", 25.50);
var livroDigital1 = new LivroDigital("O Hobbit", "J.R.R. Tolkien", 29.90, "PDF");
var livroDigital2 = new LivroDigital("Dom Casmurro", "Machado de Assis", 19.90, "EPUB");
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
