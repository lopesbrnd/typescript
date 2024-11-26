/* Crie uma classe Livro com os atributos titulo,
autor e preco. Crie um método descricao que retorne
uma string com o título, autor e preço do livro.
*/
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    Livro.prototype.descricao = function () {
        return "Livro: ".concat(this.titulo, "\nAutor: ").concat(this.autor, "\nPre\u00E7o: R$ ").concat(this.preco.toFixed(2));
    };
    return Livro;
}());
var livro1 = new Livro("1984", "George Orwell", 16.09);
var livro2 = new Livro("O Senhor dos Anéis (box)", "Tolkien", 129.90);
var livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);
var livros = [livro1, livro2, livro3];
livros.forEach(function (livro) {
    console.log(livro.descricao());
    console.log("------------");
});
// Ação não desejada
livro2.preco = -1.99;
console.log(livro2.descricao());
