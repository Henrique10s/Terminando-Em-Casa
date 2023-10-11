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
        return "Titulo: ".concat(this.titulo, ", Autor: ").concat(this.autor, ", ano Publicacao: ").concat(this.anoPublicacao);
    };
    return Livro;
}());
exports.Livro = Livro;
