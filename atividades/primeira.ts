export class Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
    
     constructor(titulo: string, autor: string, anoPublicacao: number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
     }
     obterDetalhes(){
        console.log(`O título do livro é: ${this.titulo}`);
        console.log(`O autor do livro é ${this.autor}`);
        console.log(`O ano da publicacao do livro é: ${this.anoPublicacao}`);  
     }
   }
   