"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var primeira_1 = require("./primeira");
function main() {
    var informacoesBooks = cadastroLivros();
    console.log(informacoesBooks.obterDetalhes());
}
function cadastroLivros() {
    var titulo = leitor.question("Insira o título do livro: ");
    var autor = leitor.question("Insira o nome do autor do livro: ");
    var anoProducao = leitor.question("Insira o ano de lancamento do livro: ");
    var informacoesBooks = new primeira_1.Livro(titulo, autor, anoProducao);
    return informacoesBooks;
}
main();
