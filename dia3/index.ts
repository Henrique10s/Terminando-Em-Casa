import * as leitor from "readline-sync"
import {Aluno} from "./segunda";

function main(): void{
    let aluno = cadastroMedia()
    console.log(aluno.getMedia());
    
}

function cadastroMedia(): Aluno{
    const nome = leitor.question("Insira o nome do aluno: ")
    let aluno = new Aluno(nome)
    console.log("Aluno criado com sucesso!");

    const n1 = leitor.questionFloat("Insira as suas notas 1: ")
    const n2 = leitor.questionFloat("Insira as suas notas 2: ")
    const n3 = leitor.questionFloat("Insira as suas notas 3: ")
    aluno.setNotas(n1, n2, n3)
    
    return aluno
}
main()