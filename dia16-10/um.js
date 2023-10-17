"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var menu = true;
while (menu) {
    var opcoes = leitor.questionInt("Insira um numero de 1 a 3: ");
    switch (opcoes) {
        case 1:
            console.log("Bom dia!");
            break;
        case 2:
            console.log("Boa tarde!");
            break;
        case 3:
            console.log("Boa noite!");
            break;
        default:
            console.log("Opcao inexistente, saindo...");
            menu = false;
            break;
    }
}
