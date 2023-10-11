import * as leitor from "readline-sync"

export class triangulo{

    base: number;
    altura: number;

    constructor(base: number, altura: number){
        this.base = base
        this.altura= altura

    }
    setValoresTriangulo(){
       this.base = leitor.questionFloat("Insira o valor da base do triangulo: ")
       this.altura = leitor.questionFloat("Insira o valor da altura do triangulo: ")

    }
}


export class circulo{
    raio: number;
    pi: number;

    constructor(raio: number, pi: number){
        this.raio = raio
        this.pi = pi

    }
    setValoresCirculo(){
        this.raio = leitor.questionFloat("Insira o valor da base do circulo: ")
        this.pi = 3,14

}
}

export class retangulo{
    rBase: number;
    rAltura: number;

    constructor(rBase: number, rAltura: number){
        this.rBase = rBase
        this.rAltura= rAltura
    }
    setValoresTriangulo(){
        this.rBase = leitor.questionFloat("Insira o valor da base do retangulo: ")
        this.rAltura = leitor.questionFloat("Insira o valor da altura do retanglo: ")
    }


}
