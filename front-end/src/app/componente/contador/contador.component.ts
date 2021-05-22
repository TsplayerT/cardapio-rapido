import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Utilidade } from 'src/app/utilidade';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {

  myFormGroup = new FormGroup({
    formField: new FormControl()
  });

  @Input()
  valor: number = 0;
  incremento: number = 1;
  valorMinimo: number = 0;
  valorMaximo: number = 999;
  cor: string = 'default';

  @Output()
  valorAlterado = new EventEmitter<number>();

  pegarCor = (): string => this.cor;
  mudarCor = (color: string): string => this.cor = color;
  
  permitidoDecremento = (valorAtual: number): boolean => valorAtual <= this.valorMinimo;
  permitidoIncremento = (valorAtual: number): boolean => valorAtual >= this.valorMaximo;

  alterarValor(incremento: number): void {
    let novoValor =  this.valor + incremento;

    Utilidade.Registrar('contador', `antigoValor: ${this.valor} | novoValor: ${novoValor}`);

    this.valor = novoValor;
    this.valorAlterado.emit(novoValor);    
  }

  textoMudando(valorAtual: string): void {
    if (!Number.parseInt(valorAtual) || this.valor <= 0) {
      Utilidade.Registrar('contador', `valor inválido | valorAtual: ${valorAtual} - valor: ${this.valor}`);
      this.valor = 0;
      console.log(this.valor);
    }
  }
}