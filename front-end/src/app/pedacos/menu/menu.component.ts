import { OpcaoComponent } from './../../formularios/opcao/opcao.component';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Opcao } from 'src/app/tipos';
import { Utilidade } from 'src/app/utilidade';

interface Aba {
  id: number;
  titulo: string;
  imagemTag: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {

  //icones: https://material.io/resources/icons
  abas: Aba[] = [
    { id: 0, titulo: 'Café da Manhã', imagemTag: 'coffee' },
    { id: 1, titulo: 'Almoço', imagemTag: 'lunch_dining' },
    { id: 2, titulo: 'Jantar', imagemTag: 'dinner_dining' },
    { id: 3, titulo: 'Outros', imagemTag: 'cake' },
    { id: 4, titulo: 'Bebidas', imagemTag: 'wine_bar' }
  ];

  textoNenhumaOpcao = 'Nenhuma opção encontrada';
  opcoes: Opcao[][] = [
    //cafe da manha
    [
      { id: 0, nome: 'teste 1', descricao: 'bla bla', preco: 2.5 },
      { id: 1, nome: 'teste 2', descricao: 'foo foo', preco: 6, ingridientes: [ 'água', 'sal', 'açucar', 'lasanha', 'pão' ] },
      { id: 2, nome: 'teste 3', descricao: 'bar', preco: 1.40 },
      { id: 3, nome: 'teste 4', descricao: 'asiudaiusd as', preco: 88.5 }
    ],
    //almoco
    [
      { id: 4, nome: '1', descricao: 'testando 1', preco: 0 },
      { id: 5, nome: '2', descricao: 'asdasdasd', preco: 2 },
      { id: 6, nome: '3', descricao: 'testand 2', preco: 1 },
      { id: 7, nome: '4', descricao: 'testanso 3', preco: 81 },
      { id: 13, nome: '4', descricao: 'aiu hvhnawrui', preco: 81 },
      { id: 14, nome: '5', descricao: '0101001', preco: 81 },
      { id: 15, nome: '6', descricao: 'numero 6', preco: 81 },
      { id: 16, nome: '7', descricao: 'seteee', preco: 81 },
      { id: 17, nome: '8', descricao: 'testando texto grande 123 abc letras numeros descricao grande grande de novo', preco: 123. },
      { id: 18, nome: '9', descricao: 'oi oi', preco: 0.6579 },
      { id: 19, nome: '10', descricao: 'xauxa ', preco: .12 },
      { id: 20, nome: '11', descricao: 'testanso 3', preco: 98 },
    ],
    //jantar
    [
      { id: 8, nome: 'único item', descricao: 'nada de mais', preco: 15.0 }
    ],
    //outros
    [],
    //bebidas
    [
      { id: 9, nome: 'Café', descricao: 'Super potente', preco: 2 },
      { id: 10, nome: 'Água', descricao: 'É potável mas está quente', preco: 4.09 },
      { id: 11, nome: 'Leite', descricao: 'É de cabra', preco: 9.99 },
      { id: 12, nome: 'Vinho', descricao: 'Feito com as melhores uvas estragas', preco: 0.198 }
    ]
  ];

  constructor(public opcao: MatDialog) { }

  ajustarTextoPreco(preco: number) {
    return preco === undefined || preco === null || preco === 0 ? "GRÁTIS" : `R$ ${preco.toFixed(2)}`;
  }

  abrirOpcao(opcao: Opcao) {
    const dialogRef = this.opcao.open(OpcaoComponent, 
    {
      width: '150px',
      data: opcao
    });

    dialogRef.afterClosed().subscribe(resultado => {

      for (let index = 0; index < resultado?.length; index++) {
        const opcao = resultado[index];

        Utilidade.RegistrarOpcao('finalizando', opcao, index);
    }});
  }
}
