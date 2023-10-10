"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        console.log("O t\u00EDtulo do livro \u00E9: ".concat(this.titulo));
        console.log("O autor do livro \u00E9 ".concat(this.autor));
        console.log("O ano da publicacao do livro \u00E9: ".concat(this.anoPublicacao));
    };
    return Livro;
}());
exports.Livro = Livro;
