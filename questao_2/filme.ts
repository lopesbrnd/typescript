export class filme {
    private _titulo: string;
    private _diretor: string;
    private _anolancamento: number;
    avaliacoes:number[] =[]
    
    constructor(titulo: string, diretor: string, anolancamento: number){
        this._titulo = titulo;
        this._diretor = diretor;
        this._anolancamento = anolancamento


    }
    get titulo(): string { return this._titulo; }
  
    set titulo(titulo: string) { this._titulo = titulo; }
  
    get diretor(): string { return this._diretor; }

    set diretor(diretor: string) { this._diretor = diretor; }

    get anolancamento(): number { return this._anolancamento; }
  
    set anolancamento(anolancamento: number) { this._anolancamento = anolancamento; }
  
    adicionaravaliacao(avaliacao: number): void {
        if (avaliacao >= 1 && avaliacao >=5) {
          avaliacao = mediadeavaliacoes / numerodeavaliacoes
        } else {
          console.log('avaliacao deve ser entre 1 e 5');
        }
      }
}