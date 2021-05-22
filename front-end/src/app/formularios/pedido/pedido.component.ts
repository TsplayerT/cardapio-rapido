import { Opcao } from './../../tipos';
import { MatDialogRef } from '@angular/material/dialog';
import { PedidosService } from './../../servicos/pedidos.service';
import { Component } from '@angular/core';
import { Utilidade } from 'src/app/utilidade';

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
    this.existeOpcoes = pedidosService.pedido.length > 0;
  }

  pegarOpcoes = (): Opcao[] => this.pedidosService.pedido;
  textoOpcao = (opcao: Opcao): string => this.pedidosService.pegarTextoOpcao(opcao);
  precoOpcao = (opcao: Opcao): string => this.pedidosService.pegarTextoPrecoOpcao(opcao);
  precoPedido = (): string => this.pedidosService.pegarTextoPrecoPedido();

  finalizar() {
    // let link = Utilidade.PegarLinkFinal(this.pedidosService);

    this.dialogRef.close(this.pedidosService.pedido);
    // window.open(link);
  }
}
