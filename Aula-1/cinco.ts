import * as leitor from "readline-sync"
function main(){
    let primeiroNumero: number;
    let segundoNumero: number;
    let terceiroNumero: number;

    primeiroNumero = leitor.questionFloat("Insira o primeiro valor que deseja calcular: ")
    segundoNumero = leitor.questionFloat("Insira o segundo valor que deseja calcular: ")
    terceiroNumero = leitor.questionFloat("Insira o terceiro valor que deseja calcular: ")    
    
}
function soma(primeiroNumero, segundoNumero, terceiroNumero){
    let somar = primeiroNumero + segundoNumero + terceiroNumero
    return 
}

    let primeiraSub =  primeiroNumero - segundoNumero
    let segundaSub = primeiroNumero - terceiroNumero
    let terceiraSub = segundoNumero - terceiroNumero


    return `${primeiraSub}, ${segundaSub}, ${terceiraSub}`
