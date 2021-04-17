import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { OwlOptions } from "ngx-owl-carousel-o";

interface Opcao {
  id: number;
  texto: string;
  url: string;
}

@Component({
  selector: 'app-recomendacao',
  templateUrl: './recomendacao.component.html',
  styleUrls: ['./recomendacao.component.css']
})
export class RecomendacaoComponent {
  
  configuracoes: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: true,
    margin: 10,
    //adicionar depois
    //navText: [ '', '' ],
    responsive: {
      0: {
        items: 3
      }
    }
  };
  opcoes: Opcao[] = [
    { id: 1, texto: 'bla bla bla', url: 'https://via.placeholder.com/150/323232' },
    { id: 1, texto: 'foo foo foo', url: 'https://via.placeholder.com/150/646464' },
    { id: 1, texto: 'xau xau xau', url: 'https://via.placeholder.com/150/969696' },
    { id: 1, texto: 'asd asd asd', url: 'https://via.placeholder.com/150/c8c8c8' }
  ];

  constructor(private http: HttpClient) { }
}
