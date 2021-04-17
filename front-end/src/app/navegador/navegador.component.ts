import { Component } from '@angular/core';

export var QuantidadePedidos: number;

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
}
