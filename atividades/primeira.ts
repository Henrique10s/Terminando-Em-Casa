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
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, ano Publicacao: ${this.anoPublicacao}`
         
        
     }
   }
   