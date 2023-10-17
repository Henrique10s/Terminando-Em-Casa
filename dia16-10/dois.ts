import * as leitor from "readline-sync"

let menu = true

while(menu){
    let opcao = leitor.questionInt("Digite 1 para azul, 2 para verde, 3 para amarelo, 4 para vermelho e qualquer outro para sair: ") 

    switch(opcao){
        case 1: 
             let azul = "Azul me lembra o ceu"
             console.log(azul);
        break;
        case 2: 
             let verde = "Verde me lembra a grama"
             console.log(verde);
        break;
        case 3: 
             let amarelo = "Amarelo me lembra o Brasil"
             console.log(amarelo);
        break;
        case 4: 
             let vermelho = "Vermelho me lembra o sangue"
             console.log(vermelho);
        break;
        default:
            console.log("Opcao inexistente, saindo...");
            menu = false
        break;            
    }
}