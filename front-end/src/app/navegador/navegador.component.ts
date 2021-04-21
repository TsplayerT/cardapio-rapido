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
    { id: 1, texto: 'Início', url: '/' },
    { id: 2, texto: 'Recomendações', url: '/' },
    { id: 3, texto: 'Menu', url: '/' },
    { id: 4, texto: 'Contato', url: '/' }
  ];

  constructor(public pedidosService: PedidosService, public pedido: MatDialog) {
    this.pedidosService.quantidadePedidos.subscribe(quantidade => this.quantidadePedidos = quantidade);
  }

  abrirPedido(): void {
    const dialogRef = this.pedido.open(PedidoComponent, 
    {
      width: '150px'
    });
  }
}
