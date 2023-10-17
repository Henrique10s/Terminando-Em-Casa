import * as leitor from "readline-sync"


let menu = true

while(menu){
    let opcoes = leitor.questionInt("Insira um numero de 1 a 3: ")
    switch(opcoes){
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
             menu = false
        break; 
        
    }
}