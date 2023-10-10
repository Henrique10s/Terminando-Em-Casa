import {Pessoa} from "./pessoa";
import * as leitor from "readline-sync";

function main(): void{

    const humano = metodos()
    let decisao = leitor.question("Você gostatia de modificar o cadastro? (s/n) ")
    if(decisao ==="s"){
        editarCadastro(humano)
}
 else {
    console.log("Obrigado, saindo");
}

}
   
function cadastro(): Pessoa{
  
  let nome = leitor.question("Insira o seu nome aqui: ")
  let CPF = leitor.questionInt("Insira o seu CPF aqui: ") 
  let RG = leitor.questionInt("Insira o seu RG aqui: ")
  let cor = leitor.question("Insira a sua cor aqui: ")
  let idade = leitor.questionInt("Insira a sua idade aqui: ")
  const humano = new Pessoa(nome, CPF, RG, cor, idade)
 return humano
   }
  
   function metodos(): Pessoa{
    const humano = cadastro()
  humano.getNome()
  humano.getCPF()
  humano.getRG()
  humano.getCor()
  humano.getIdade() 
   return humano

   }

   function editarCadastro(humano: Pessoa) {
    humano.setNome
    humano.setCpf
    humano.setRg
    humano.setCor
    humano.setIdade
    humano.getNome
    humano.getCPF
    humano.getRG
    humano.getCor
    humano.getIdade
   }
main()
