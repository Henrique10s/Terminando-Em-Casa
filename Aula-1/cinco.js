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
    console.log("OS VALORES DAS SOMAS SAO: ".concat(soma));
}
function soma(primeiroNumero, segundoNumero, terceiroNumero) {
    var somar = primeiroNumero + segundoNumero + terceiroNumero;
    return somar;
}
function subTra(primeiroNumero, segundoNumero, terceiroNumero) {
    var subtrair = primeiroNumero - segundoNumero - terceiroNumero;
    return subtrair;
}
function divisao(primeiroNumero, segundoNumero, terceiroNumero) {
    var div = primeiroNumero / segundoNumero / terceiroNumero;
    return div;
}
function multiplica(primeiroNumero, segundoNumero, terceiroNumero) {
    var multi = primeiroNumero * segundoNumero * terceiroNumero;
    return multi;
}
main();
