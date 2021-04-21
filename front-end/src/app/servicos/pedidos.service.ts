import { EventEmitter, Injectable } from '@angular/core';
import { Utilidade } from 'src/app/utilidade';
import { Opcao } from 'src/app/tipos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  public quantidadePedidos = new EventEmitter<number>();
  public opcoesPedidas: Opcao[] = []; 

  atualizarPedido(opcao: Opcao): void {
    let index = this.opcoesPedidas.findIndex(x => x.id == opcao?.id);

    if(index >= 0) {
      if(opcao.quantidade > 0) {
        this.opcoesPedidas[index] = opcao;

        Utilidade.RegistrarOpcao('atualizando', opcao, index);
      }
      else {
        this.opcoesPedidas.splice(index);
        this.quantidadePedidos.emit(this.opcoesPedidas.length);

        Utilidade.RegistrarOpcao('removendo', opcao, index);
      }
    }
    else if (opcao != null && opcao != undefined) {
      this.opcoesPedidas.push(opcao);
      this.quantidadePedidos.emit(this.opcoesPedidas.length);

      Utilidade.RegistrarOpcao('adicionado', opcao, index);
    }
  }

  pegarQuantidadeOpcao(opcao: Opcao): number {
    let index = this.opcoesPedidas.findIndex(x => x.id == opcao.id);
    let valor =  index >= 0 ? this.opcoesPedidas[index].quantidade : 0;

    Utilidade.RegistrarOpcao('consultando', opcao, index);

    return valor;
  }

  pegarQuantidadePedidos(): number {
    return this.opcoesPedidas == null || this.opcoesPedidas == undefined ? 0 : this.opcoesPedidas.length;
  }

  pegarQuantidadeOpcoesTotais(): number {
    var quantidade = 0;
  
    if (this.opcoesPedidas != null && this.opcoesPedidas != undefined) {
      for (var i = 0; i < this.opcoesPedidas.length; i++) {
        if (this.opcoesPedidas[i] != null && this.opcoesPedidas[i] != undefined && this.opcoesPedidas[i].quantidade != null && this.opcoesPedidas[i].quantidade != undefined) {
          quantidade += this.opcoesPedidas[i].quantidade;
        }    
      }
    }
  
    return quantidade;
  }
  
  constructor() { }
}
