import * as leitor from "readline-sync"

function main(){
    let salarioBruto: Number;
    let salarioINSS: Number;
    let salarioIRRF: Number;
    let salarioLiquido: Number;

    salarioBruto = leitor.questionFloat("Insira o valor do seu salario bruto");

    salarioINSS = salarioBruto
    salarioLiquido = IRRF(salarioINSS)
    console.log("Seu salario é:", salarioBruto);
    console.log("Seu salario com descontos do INSS sera de:", salarioINSS);
    console.log("Seu salario liquido sera de:", salarioLiquido);
    
    
    
}

function INSS(salario): Number {
    if(salario <= 1320){
        return salario*0.925
    } else if(salario > 1320 && salario < 2572){
        return salario * 0.91
    } else if(salario > 2570 && salario < 3856){
        return salario *0.88
    } else if( salario > 3856){
        return salario *0.86
    }else {
        console.log("Valor inválido!");
        return 0
    }
}

function IRRF(salario): Number {
    if(salario <= 2112){
        return salario
    } else if (salario > 2112 && salario <= 2826){
    return salario *0.85
} else if( salario > 3751 && salario <= 4664){
    return salario*0.785
} else if ( salario > 4664){
    return salario*0.725
} else{
    console.log("Valor invalido");
    return 0 
    
} 
} 
main()