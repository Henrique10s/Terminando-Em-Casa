import * as leitor from "readline-sync"

import { Livro } from "./primeira"

function main(): void{
    
    const informacoesBooks = cadastroLivros()
   console.log(informacoesBooks.obterDetalhes());
   
    
}
function cadastroLivros(): Livro{
    let titulo = leitor.question("Insira o título do livro: ")
    let autor = leitor.question("Insira o nome do autor do livro: ")
    let anoProducao = leitor.question("Insira o ano de lancamento do livro: ")
    const informacoesBooks = new Livro(titulo, autor,anoProducao)
    return informacoesBooks
}
main()
