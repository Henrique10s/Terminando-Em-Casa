"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var primeiroNumero;
    var segundoNumero;
    var terceiroNumero;
    primeiroNumero = leitor.questionFloat("Insira o primeiro valor que deseja calcular: ");
    segundoNumero = leitor.questionFloat("Insira o segundo valor que deseja calcular: ");
    terceiroNumero = leitor.questionFloat("Insira o terceiro valor que deseja calcular: ");
    console.log("Os resultados das suas somas sao: ", soma);
    console.log("Os resultados das suas subtracoes sao: ", subtra);
    console.log("Os resultados das suas divisoes sao: ", div);
    console.log("Os resultados das suas multiplicacoes sao: ", multi);
}
function soma(primeiroNumero, segundoNumero, terceiroNumero) {
    var primeiraSoma = primeiroNumero + segundoNumero;
    var segundaSoma = primeiroNumero + terceiroNumero;
    var terceiraSoma = segundoNumero + terceiroNumero;
    return "".concat(primeiraSoma, ", ").concat(segundaSoma, ", ").concat(terceiraSoma);
}
function subtra(primeiroNumero, segundoNumero, terceiroNumero) {
    var primeiraSub = primeiroNumero - segundoNumero;
    var segundaSub = primeiroNumero - terceiroNumero;
    var terceiraSub = segundoNumero - terceiroNumero;
    return "".concat(primeiraSub, ", ").concat(segundaSub, ", ").concat(terceiraSub);
}
function div(primeiroNumero, segundoNumero, terceiroNumero) {
    var primeiraDiv = primeiroNumero / segundoNumero;
    var segundaDiv = primeiroNumero / terceiroNumero;
    var terceiraDiv = segundoNumero / terceiroNumero;
    return "".concat(primeiraDiv, ", ").concat(segundaDiv, ", ").concat(terceiraDiv);
}
function multi(primeiroNumero, segundoNumero, terceiroNumero) {
    var primeiraMulti = primeiroNumero * segundoNumero;
    var segundaMulti = primeiroNumero * terceiroNumero;
    var terceiraMulti = segundoNumero * terceiroNumero;
    return "".concat(primeiraMulti, ", ").concat(segundaMulti, ", ").concat(terceiraMulti);
}
main();
