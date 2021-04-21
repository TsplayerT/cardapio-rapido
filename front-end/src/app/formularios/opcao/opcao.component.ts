import { PedidosService } from './../../servicos/pedidos.service';
import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Opcao } from 'src/app/tipos';

@Component({
  selector: 'app-opcao',
  templateUrl: './opcao.component.html',
  styleUrls: ['./opcao.component.css']
})
export class OpcaoComponent {

  @Output()
  quantidade = 0;
  botaoFinalizarTexto = 'Adicionar Opção';
  textoDescricao = 'Descrição';
  textoIngridientes = 'Ingridientes';
  textoSemIngridientes = 'Nenhum ingridiente cadastrado';
  existeIngridientesCadastrados = false;

  constructor(private pedidosService: PedidosService, public dialogRef: MatDialogRef<OpcaoComponent>, @Inject(MAT_DIALOG_DATA) public opcao: Opcao) {
    this.existeIngridientesCadastrados = opcao.ingridientes != null && opcao.ingridientes != undefined && opcao.ingridientes.length > 0;
    this.quantidade = pedidosService.pegarQuantidadeOpcao(this.opcao);
  }

  finalizar() {
    this.opcao.quantidade = this.quantidade;

    this.pedidosService.atualizarPedido(this.opcao);
    this.dialogRef.close(this.pedidosService.opcoesPedidas);
  }

  pegarImagemUrl(): string {
    return this.opcao.imagemUrl === null || this.opcao.imagemUrl === undefined || this.opcao.imagemUrl === '' ? 'assets/sem-imagem.png' : this.opcao.imagemUrl;
  }
}
