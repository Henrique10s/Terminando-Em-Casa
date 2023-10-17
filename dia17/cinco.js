"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var menu = true;
while (menu) {
    var nota = leitor.questionInt("Insira uma nota de 0 a 100 ou 101 para sair: ");
    var teste = true;
    switch (teste) {
        case nota > 80 && nota === 100:
            console.log("Sua nota e A");
            break;
        case nota >= 60 && nota <= 79:
            console.log("Sua nota e B");
            break;
        case nota >= 49 && nota <= 59:
            console.log("Sua nota e C");
            break;
        case nota >= 25 && nota <= 48:
            console.log("Sua nota e D");
            break;
        case nota < 24:
            console.log("Sua nota e F");
            break;
        case nota === 101:
            console.log("Saindo");
            menu = false;
            break;
        default:
            console.log("Opcao inexistente, saindo...");
            break;
    }
}
