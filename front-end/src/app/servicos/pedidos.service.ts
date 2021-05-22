import { EventEmitter, Injectable } from '@angular/core';
import { Utilidade } from 'src/app/utilidade';
import { Opcao } from 'src/app/tipos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  public quantidadePedidos = new EventEmitter<number>();
  public pedido: Opcao[] = []; 

  atualizarPedido(opcao: Opcao): void {
    let index = this.pedido.findIndex(x => x.id == opcao?.id);

    if(index >= 0) {
      if(opcao.quantidade > 0) {
        this.pedido[index] = opcao;

        Utilidade.RegistrarOpcao('atualizando', opcao, index);
      }
      else {
        this.pedido.splice(index);
        this.quantidadePedidos.emit(this.pedido.length);

        Utilidade.RegistrarOpcao('removendo', opcao, index);
      }
    }
    else if (opcao != null && opcao != undefined) {
      this.pedido.push(opcao);
      this.quantidadePedidos.emit(this.pedido.length);

      Utilidade.RegistrarOpcao('adicionado', opcao, index);
    }
  }

  pegarQuantidadeOpcao(opcao: Opcao): number {
    let index = this.pedido.findIndex(x => x.id == opcao.id);
    let valor =  index >= 0 ? this.pedido[index].quantidade : 0;

    Utilidade.RegistrarOpcao('consultando', opcao, index);

    return valor;
  }

  pegarQuantidadePedidos(): number {
    return this.pedido == null || this.pedido == undefined ? 0 : this.pedido.length;
  }

  pegarQuantidadeOpcoesTotais(): number {
    var quantidade = 0;
  
    if (this.pedido != null && this.pedido != undefined) {
      for (var i = 0; i < this.pedido.length; i++) {
        if (this.pedido[i] != null && this.pedido[i] != undefined && this.pedido[i].quantidade != null && this.pedido[i].quantidade != undefined) {
          quantidade += this.pedido[i].quantidade;
        }    
      }
    }
  
    return quantidade;
  }

  pegarTextoPrecoPedido(): string {
    let precoFinal = 0;
    let textoInicial = 'Total:';

    this.pedido.forEach(x => precoFinal += x.quantidade * x.preco);

    return precoFinal > 0 ? `${textoInicial} R$ ${precoFinal.toFixed(2)}` : `${textoInicial} GRÁTIS`;
  }

  pegarTextoPrecoOpcao(opcao: Opcao): string {
    return opcao.preco > 0 ? `R$ ${((opcao.quantidade ?? 1) * opcao.preco).toFixed(2)}` : 'GRÁTIS';
  }

  pegarTextoOpcao (opcao: Opcao): string {
    return `${opcao.quantidade} - ${opcao.nome}`;
  };
  
  constructor() { }
}
