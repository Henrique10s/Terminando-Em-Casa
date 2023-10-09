"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var adulto = leitor.questionInt("Insira a quantidade de adultos que estao na festa: ");
    var criança = leitor.questionInt("Insira a quantidade de crianças que estao na festa: ");
    console.log("The total party size is: ", calc(adulto, criança));
}
function calc(adulto, criança) {
    return adulto + criança;
}
main();
