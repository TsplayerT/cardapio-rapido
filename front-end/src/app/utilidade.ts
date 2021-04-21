import { isDevMode } from '@angular/core';
import { Opcao } from '../app/tipos';

export class Utilidade {

  static Registrar = (titulo: string, mensagem: string): void => isDevMode && console.log(`[${titulo}] -> ${mensagem}`);
  static RegistrarOpcao = (titulo: string, opcao: Opcao, index: number = null): void => isDevMode && console.log(`[${titulo}] -> ${index != null ? `index: ${index}` : ''} - id: ${opcao.id} - nome: ${opcao.nome} - quantidade: ${opcao.quantidade}`);

}