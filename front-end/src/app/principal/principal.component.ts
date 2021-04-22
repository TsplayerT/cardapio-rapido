import { Utilidade } from 'src/app/utilidade';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent { 
  
  private animacaoTermoInicial = 'animar';
  private animacaoTermoFinal = 'animando';
  private elementosAnimaveis: Element[];

  constructor() {
    window.onscroll = () => Utilidade.GerenciadorFuncao(this.funcaoAnimar, 500);
    window.onload = () => {
      this.elementosAnimaveis = Array.from(document.querySelectorAll(`[class*="${this.animacaoTermoInicial}"]`));
      Utilidade.Registrar('animacao', `${this.elementosAnimaveis.length} criados`);

      this.funcaoAnimar();
    };
  };

  funcaoAnimar = (): void => {
    Utilidade.Registrar('animacao', 'procurando...');
    
    this.elementosAnimaveis.forEach(elemento => {
      if (Utilidade.PossivelAnimar(elemento, this.animacaoTermoInicial)) {
        Utilidade.Registrar('animacao', `executando em: ${Utilidade.PegarIdPai(elemento)} | ${elemento.localName} | ${elemento.className}`);

        elemento?.classList.forEach(valor => {
          if (valor.startsWith(this.animacaoTermoInicial)) {
            let valorTratado = valor.replace(this.animacaoTermoInicial, this.animacaoTermoFinal);

            elemento?.classList.replace(valor, valorTratado);
          }
        });
      }
    })
  };

  rolarAte = (referencia: string): void => Utilidade.RolarAte(referencia);
}
