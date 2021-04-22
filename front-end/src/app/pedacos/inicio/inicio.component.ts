import { Utilidade } from './../../utilidade';
import { Component } from '@angular/core';

interface Titulo {
  texto: string;
  negrito: boolean;
  quebrarLinha: boolean;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  imagemFundo = 'assets/vetor.png';
  pratoChefe = 'assets/prato-chefe.png';

  pedacosTitulo: Titulo[] = [
    { texto: 'Pratos', negrito: false, quebrarLinha: false },
    { texto: ' Incríveis', negrito: true, quebrarLinha: false },
    { texto: 'pra', negrito: false, quebrarLinha: true },
    { texto: ' você', negrito: true, quebrarLinha: false },
    { texto: '.', negrito: false, quebrarLinha: false }
  ];
  descricao = 'Todos os dias, nosso restaurante busca novos produtos. Quando você fizer um pedido pode ter certeza que vai saborear delícias fresquinhas e preparadas alguns segundos antes de chegar na sua mesa..';
  botaoMenuTexto = 'Ver Menu';

  estiloTitulo(pedacoTitulo: Titulo) {
    return {
      'font-weight': pedacoTitulo.negrito ? 'bold' : 'normal',
      'font-size': 'xxx-large'
    }
  };
  
  rolarAte = (referencia: string): void => Utilidade.RolarAte(referencia);
}
