// 1- A sintaxe basica do while é : 


/* while (condição) {
  rotina
}
*/


// 2 -  exemplo;

/* let menu = true

   while(menu){
    let opcao = leitor.question("Como foi o  seu dia?")

    switch(opcao){
        case 1: leitor.question("Digite 1 para foi bom!")
        break;
        case 2: leitor.question("Digite 2 para foi ruim!")
        break
        case 3: leitor.question("Digite para sair!")
        break
        default;
        console.log("opcao inexistente, saindo... ")
        menu = false

    }
   }
*/

// 3 - podemos utilizar como foi mostrado acima, utilizando o while junto com o switch case.


// 4 -Não é obrigatório, mas nao utilizando o break, o seu "case 1" quando ele acabar, ele vai ir direto para o seu "case 2"


// 5- Sim 

// 6 - Sim exemplo

/* let diaDaSemana: number = 3;

switch (diaDaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    default:
        console.log("Dia não reconhecido");
        break;
}
*/


/* 7 -  quando não há nenhum caso correspondente ao valor fornecido em uma instrução switch, a execução continua
 para o bloco default, se ele estiver presente. O bloco default é opcional e atua como um caso de "faz-tudo" quando nenhum dos 
 casos anteriores corresponde ao valor da expressão no switch. */

 // 8 - Sim, exemplo esta abaixo

 /* function diaDaSemana(numero: number) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Dia inválido";
    }
}

console.log(diaDaSemana(3)); // Irá imprimir "Terça-feira"
console.log(diaDaSemana(8)); // Irá imprimir "Dia inválido"
*/


/* Sim, é possível ter casos vazios no switch case em muitas linguagens de programação, incluindo TypeScript. Um caso vazio ocorre quando não há
 código dentro de um caso, ou seja, é uma instrução vazia. No entanto, é importante observar que ter casos vazios geralmente é incomum e não tem 
 um uso óbvio na maioria das situações.

A razão pela qual você pode encontrar casos vazios em código pode ser devido a alguns cenários específicos:

Estrutura de controle condicional: Às vezes, os programadores usam casos vazios como marcadores ou rótulos para criar estruturas de controle condicional
mais complexas. Por exemplo, você pode usar um caso vazio para definir uma "etiqueta" em um switch e, em seguida, usar break para saltar para um caso posterior.
No entanto, isso é menos legível do que outras abordagens e geralmente não é recomendado.

Lógica condicional futura: Casos vazios podem ser inseridos como espaços reservados para lógica futura. Um programador pode criar casos vazios com a intenção de
preenchê-los posteriormente com código. No entanto, isso é propenso a ser esquecido e deixar partes do código sem funcionalidade.
Código legado ou de manutenção: Em código legado, você pode encontrar casos vazios que não têm um propósito aparente. Esses casos podem ser resquícios de código anterior que não foram removidos.

Em resumo, embora seja possível ter casos vazios em switch case, é uma prática geralmente evitada, pois torna o código menos legível e pode levar a confusão.
Em vez disso, é recomendável usar switch case para tomar decisões com base em valores específicos e incluir lógica significativa nos casos para tornar o código mais claro e compreensível.
 
 */

