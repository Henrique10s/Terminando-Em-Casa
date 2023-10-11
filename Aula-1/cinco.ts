import * as leitor from "readline-sync"
function main(){
    let primeiroNumero: number;
    let segundoNumero: number;
    let terceiroNumero: number;

    primeiroNumero = leitor.questionFloat("Insira o primeiro valor que deseja calcular: ")
    segundoNumero = leitor.questionFloat("Insira o segundo valor que deseja calcular: ")
    terceiroNumero = leitor.questionFloat("Insira o terceiro valor que deseja calcular: ")    
    console.log(`OS VALORES DAS SOMAS SAO: ${soma}`);
    
}
function soma(primeiroNumero, segundoNumero, terceiroNumero){
    let somar = primeiroNumero + segundoNumero + terceiroNumero
    return somar
}
function subTra(primeiroNumero, segundoNumero, terceiroNumero){
    let subtrair = primeiroNumero - segundoNumero - terceiroNumero
    return subtrair 
}
function divisao(primeiroNumero, segundoNumero, terceiroNumero){
    let div = primeiroNumero / segundoNumero / terceiroNumero
    return div
}
function multiplica(primeiroNumero, segundoNumero, terceiroNumero){
    let multi = primeiroNumero * segundoNumero * terceiroNumero
    return multi
}
main()