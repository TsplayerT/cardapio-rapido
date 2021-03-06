import { Utilidade } from './../utilidade';
import { PedidoComponent } from './../formularios/pedido/pedido.component';
import { MatDialog } from '@angular/material/dialog';
import { PedidosService } from './../servicos/pedidos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent {

  quantidadePedidos = 0;
  logoUrl = 'assets/logo.png';
  botaoPedidoTexto = 'Ver Pedido';
  botoes = [
    { id: 1, texto: 'Início', referencia: 'inicio' },
    { id: 2, texto: 'Recomendações', referencia: 'recomendacao' },
    { id: 3, texto: 'Menu', referencia: 'menu' },
    { id: 4, texto: 'Contato', referencia: 'contato' }
  ];

  constructor(public pedidosService: PedidosService, public pedido: MatDialog) {
    this.pedidosService.quantidadePedidos.subscribe(quantidade => this.quantidadePedidos = quantidade);
  }

  rolarAte = (referencia: string): void => Utilidade.RolarAte(referencia);

  abrirPedido(): void {
    /*const dialogRef = */this.pedido.open(PedidoComponent, 
    {
      width: '150px'
    });
  }
}
