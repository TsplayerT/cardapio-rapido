import { Utilidade } from 'src/app/utilidade';
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
  quantidade: number = 0;
  quantidadeSalva: number = 0;
  textoDescricao: string = 'Descrição';
  textoPreco: string;
  textoIngridientes: string = 'Ingridientes';
  textoSemIngridientes: string = 'Nenhum ingridiente cadastrado';
  existeIngridientesCadastrados: boolean = false;
  
  botaoFinalizarTexto: string;
  textoAdicionar: string = 'Adicionar';
  textoAtualizar: string = 'Atualizar';
  textoRemover: string = 'Remover';

  constructor(private pedidosService: PedidosService, public dialogRef: MatDialogRef<OpcaoComponent>, @Inject(MAT_DIALOG_DATA) public opcao: Opcao) {
    this.existeIngridientesCadastrados = opcao.ingridientes != null && opcao.ingridientes != undefined && opcao.ingridientes.length > 0;
    this.quantidade = this.quantidadeSalva = pedidosService.pegarQuantidadeOpcao(this.opcao);
    this.textoPreco = pedidosService.pegarTextoPrecoOpcao(opcao);

    this.valorAlterado(this.quantidadeSalva);
  }

  valorAlterado(valor: number): void {
    this.quantidade = valor;
    
    if(this.quantidadeSalva == 0) {
      this.botaoFinalizarTexto = this.textoAdicionar;
    }
    else if(valor != 0 && this.quantidadeSalva != 0) {
      this.botaoFinalizarTexto = this.textoAtualizar;
    }
    else if(valor == 0 && this.quantidadeSalva != 0) {
      this.botaoFinalizarTexto = this.textoRemover;
    }
  }

  finalizar() {
    if (this.quantidade >= 0) {
      this.opcao.quantidade = this.quantidade;
      this.pedidosService.atualizarPedido(this.opcao);
    }
    else {
      Utilidade.Registrar('formularioOpcao', 'quantidade inválida');
    }
    this.dialogRef.close(this.pedidosService.pedido);
  }

  pegarImagemUrl(): string {
    return this.opcao.imagemUrl === null || this.opcao.imagemUrl === undefined || this.opcao.imagemUrl === '' ? 'assets/sem-imagem.png' : this.opcao.imagemUrl;
  }
}
