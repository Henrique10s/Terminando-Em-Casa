"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var menu = true;
while (menu) {
    var transporte = leitor.question("Insira o meio de transporte: Carro, Onibus ou Bicicleta ou ' sair para fechar: ").toLowerCase();
    switch (transporte) {
        case 'carro':
            console.log("A velocidade media de um carro e 160 km/h");
            break;
        case 'onibus':
            console.log("A velocidade media de um onibus e 17km/h");
            break;
        case 'bicicleta':
            console.log("a velocidade media de uma bicicleta e de 15km/h a 25 km/h");
            break;
        case 'sair':
            console.log("saindo...");
            menu = false;
            break;
        default:
            console.log("Transporte invalido!");
            break;
    }
}
