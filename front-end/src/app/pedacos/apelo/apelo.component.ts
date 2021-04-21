import { Component } from '@angular/core';

@Component({
  selector: 'app-apelo',
  templateUrl: './apelo.component.html',
  styleUrls: ['./apelo.component.css']
})
export class ApeloComponent {

  batatasFritasUrl = 'assets/batatas-fritas.png';
  titulo = 'O que foi?';
  descricao = 'Peça agora mesmo!';
  botaoApeloTexto = 'Fazer Pedido';

}
