"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var leitor = require("readline-sync");
function main() {
    var humano = metodos();
    var decisao = leitor.question("Você gostatia de modificar o cadastro? (s/n) ");
    if (decisao === "s") {
        editarCadastro(humano);
    }
    else {
        console.log("Obrigado, saindo");
    }
}
function cadastro() {
    var nome = leitor.question("Insira o seu nome aqui: ");
    var CPF = leitor.questionInt("Insira o seu CPF aqui: ");
    var RG = leitor.questionInt("Insira o seu RG aqui: ");
    var cor = leitor.question("Insira a sua cor aqui: ");
    var idade = leitor.questionInt("Insira a sua idade aqui: ");
    var humano = new pessoa_1.Pessoa(nome, CPF, RG, cor, idade);
    return humano;
}
function metodos() {
    var humano = cadastro();
    humano.getNome();
    humano.getCPF();
    humano.getRG();
    humano.getCor();
    humano.getIdade();
    return humano;
}
function editarCadastro(humano) {
    humano.setNome;
    humano.setCpf;
    humano.setRg;
    humano.setCor;
    humano.setIdade;
    humano.getNome;
    humano.getCPF;
    humano.getRG;
    humano.getCor;
    humano.getIdade;
}
main();
