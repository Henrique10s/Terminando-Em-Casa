"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var segunda_1 = require("./segunda");
function main() {
    var aluno = cadastroMedia();
    console.log(aluno.getMedia());
}
function cadastroMedia() {
    var nome = leitor.question("Insira o nome do aluno: ");
    var aluno = new segunda_1.Aluno(nome);
    console.log("Aluno criado com sucesso!");
    var n1 = leitor.questionFloat("Insira as suas notas 1: ");
    var n2 = leitor.questionFloat("Insira as suas notas 2: ");
    var n3 = leitor.questionFloat("Insira as suas notas 3: ");
    aluno.setNotas(n1, n2, n3);
    return aluno;
}
main();
