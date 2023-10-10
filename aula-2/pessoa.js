"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var leitor = require("readline-sync");
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cpf, rg, cor, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.cor = cor;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        console.log("Ol\u00E1, o meu nome \u00E9: ".concat(this.nome));
    };
    Pessoa.prototype.getCPF = function () {
        console.log("O meu CPF \u00E9: ".concat(this.cpf));
    };
    Pessoa.prototype.getRG = function () {
        console.log("O meu RG \u00E9: ".concat(this.rg));
    };
    Pessoa.prototype.getCor = function () {
        console.log("A cor idade \u00E9: ".concat(this.cor));
    };
    Pessoa.prototype.getIdade = function () {
        console.log("A minha idade \u00E9: ".concat(this.idade, " anos"));
    };
    Pessoa.prototype.setNome = function () {
        var nomeDois = leitor.question("Insira o novo nome: ");
        this.nome = nomeDois;
    };
    Pessoa.prototype.setCpf = function () {
        var cpfDois = leitor.questionInt("Insira o novo CPF: ");
        this.cpf = cpfDois;
    };
    Pessoa.prototype.setRg = function () {
        var rgDois = leitor.questionInt("Insira o novo RG nome: ");
        this.rg = rgDois;
    };
    Pessoa.prototype.setCor = function () {
        var corDois = leitor.question("Insira a nova Cor:  ");
        this.cor = corDois;
    };
    Pessoa.prototype.setIdade = function () {
        var idadeDois = leitor.questionInt("Insira a nova idade: ");
        this.idade = idadeDois;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
