import { PedidosService } from './../../servicos/pedidos.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Opcao } from 'src/tipos';

@Component({
  selector: 'app-opcao',
  templateUrl: './opcao.component.html',
  styleUrls: ['./opcao.component.css']
})
export class OpcaoComponent {

  quantidade = 0;
  botaoFinalizarTexto = 'Finalizar Pedido';
  descricaoTitulo = 'Descrição';
  igridientesTitulo = 'Igridientes';
  semIgridientesTexto = 'Nenhum igridiente cadastrado';
  existeIgridientesCadastrados = false;

  constructor(private pedidosService: PedidosService, public dialogRef: MatDialogRef<OpcaoComponent>, @Inject(MAT_DIALOG_DATA) public opcao: Opcao) {
    this.existeIgridientesCadastrados = opcao.igridientes != null && opcao.igridientes != undefined && opcao.igridientes.length > 0;
  }

  finalizar(): void {
    if(this.quantidade > 0) {
      this.pedidosService.opcoesPedidas.push(this.opcao);
    }

    this.dialogRef.close(this.pedidosService.opcoesPedidas);
  }

  pegarImagemUrl(): string {
    return this.opcao.imagemUrl === null || this.opcao.imagemUrl === undefined || this.opcao.imagemUrl === '' ? 'assets/sem-imagem.png' : this.opcao.imagemUrl;
  }
}
