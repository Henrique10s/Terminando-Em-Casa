import * as leitor from "readline-sync"

let menu = true

while(menu){
    let opcao = leitor.questionInt("Insira o codigo do produto que deseja visualizar o preco:  ")

    switch(opcao){
        case 123:
          let precoArroz = 12.50
          console.log(`O preco do arroz e : ${precoArroz}`);
        break
        case 234:
            let precoFeijao = 7.99
            console.log(`O preco do feijao e: ${precoFeijao}`);
        break
        case 321: 
            let precoCarne = 24.99
            console.log(`O preco da carne e: ${precoCarne}`);
        break
        default:
            console.log("Opcao inexistente, saindo...");
            menu = false
        break
            
            

            

          
          
    }
}