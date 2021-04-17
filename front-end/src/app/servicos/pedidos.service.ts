import { Opcao } from './../../tipos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  opcoesPedidas: Opcao[] = []; 

  pegarQuantidadePedidos(): number {
    return this.opcoesPedidas == null || this.opcoesPedidas == undefined ? 0 : this.opcoesPedidas.length;
  }

  pegarQuantidadeOpcoesTotais(): number {
    var quantidade = 0;
  
    if (this.opcoesPedidas != null && this.opcoesPedidas != undefined) {
      for (var i = 0; i < this.opcoesPedidas.length; i++) {
        if (this.opcoesPedidas[i] != null && this.opcoesPedidas[i] != undefined && this.opcoesPedidas[i].quantidade != null && this.opcoesPedidas[i].quantidade != undefined) {
          quantidade += this.opcoesPedidas[i].quantidade;
        }    
      }
    }
  
    return quantidade;
  }
  
  constructor() { }
}
