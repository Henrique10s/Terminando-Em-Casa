import * as leitor from "readline-sync"

let menu = true

while(menu){
    let numeros = leitor.questionInt("Insira um numero de 1 a 5 ou 0 para sair: ")
    switch(numeros){
        case 1: 
          console.log("Voce vai vencer na vida");
        break;
        case 2:
          console.log("A mensagem anterior era mentira");
        break;
        case 3:
          console.log("Voce é lindo (a) ");
        break;
        case 4:
          console.log("Era mentira");
        break;
        case 5: 
          console.log("TE amoo");
        break;
        case 0: 
          console.log("Saindo...");
          menu = false
        break;
        default: 
        console.log("Numero nao existente no banco de dados");
        break;        
          
        
         
          
            
          
    }
}