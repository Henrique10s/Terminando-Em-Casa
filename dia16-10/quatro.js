"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var menu = true;
while (menu) {
    var opcao = leitor.questionInt("Insira o codigo do produto que deseja visualizar o preco:  ");
    switch (opcao) {
        case 123:
            var precoArroz = 12.50;
            console.log("O preco do arroz e : ".concat(precoArroz));
            break;
        case 234:
            var precoFeijao = 7.99;
            console.log("O preco do feijao e: ".concat(precoFeijao));
            break;
        case 321:
            var precoCarne = 24.99;
            console.log("O preco da carne e: ".concat(precoCarne));
            break;
        default:
            console.log("Opcao inexistente, saindo...");
            menu = false;
            break;
    }
}
