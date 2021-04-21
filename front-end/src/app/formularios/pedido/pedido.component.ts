import { Opcao } from './../../tipos';
import { MatDialogRef } from '@angular/material/dialog';
import { PedidosService } from './../../servicos/pedidos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  botaoFinalizarTexto = 'Finalizar';
  textoTitulo = 'Pedido';
  textoDescricao = 'Verifique os itens e as quantidades adicionadas antes de confirmar o pedido';
  textoSemOpcoes = 'Nenhuma opção escolhida';
  existeOpcoes = false;

  constructor(private pedidosService: PedidosService, public dialogRef: MatDialogRef<PedidoComponent>) {
    this.existeOpcoes = pedidosService.opcoesPedidas.length > 0;
  }

  montarTextoOpcao = (opcao: Opcao): string => `${opcao.quantidade} - ${opcao.nome}`;
  montarPrecoOpcao = (opcao: Opcao): string => opcao.preco > 0 ? `R$ ${(opcao.quantidade * opcao.preco).toFixed(2)}` : 'GRÁTIS';
  montarPrecoFinal = (): string => {
    let preco = 0;

    this.pedidosService.opcoesPedidas.forEach(x => preco += x.quantidade * x.preco);

    return `Total: R$ ${preco.toFixed(2)}`;
  }

  finalizar() {
    this.dialogRef.close(this.pedidosService.opcoesPedidas);
  }
}
