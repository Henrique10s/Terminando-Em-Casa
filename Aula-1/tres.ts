import * as leitor from "readline-sync"
function main(){
    let adulto = leitor.questionInt("Insira a quantidade de adultos que estao na festa: ")
    let criança = leitor.questionInt("Insira a quantidade de criancas que estao na festa: ")
    console.log("The total party size is: ", calc(adulto, criança))
}
function calc(adulto, criança){
    return adulto + criança
}
main()
