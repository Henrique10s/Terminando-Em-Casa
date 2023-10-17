"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var menu = true;
while (menu) {
    var opcao = leitor.question("Informe uma cor ou digite 'sair' para fechar: ").toLowerCase();
    switch (opcao) {
        case 'azul':
            console.log("Azul me lembra o ceu");
            break;
        case 'verde':
            console.log("Verde me lembra a grama");
            break;
        case 'amarelo':
            console.log("Amarelo me lembra o Brasil");
            break;
        case 'amarelo':
            console.log("Vermelho me lembra o sangue");
            break;
        case 'sair':
            console.log("Saindo...");
            menu = false;
            break;
        default:
            break;
    }
}
