import { isDevMode } from '@angular/core';
import { Opcao } from '../app/tipos';

export class Utilidade {

  private static tarefaIdentidade: NodeJS.Timeout = null;
  private static tarefaIncremento: number = 100;
  private static tarefaVelocidade: number = 20;
  private static gerenciadorFuncaoPermitidoExecutar: boolean = false;
  private static porcentagemMargemAdapativa: number = -2.5;

  static Registrar = (titulo: string, mensagem: string): void => isDevMode && console.log(`[${titulo}] -> ${mensagem}`);
  static RegistrarOpcao = (titulo: string, opcao: Opcao, index: number = null): void => isDevMode && console.log(`[${titulo}] -> ${index != null ? `index: ${index}` : ''} - id: ${opcao.id} - nome: ${opcao.nome} - quantidade: ${opcao.quantidade}`);

  private static FuncaoRolagemAte(referencia: string): number {
    let alturaNavegador = document.getElementById('navegador').offsetHeight;
    let alturaElemento = document.getElementById(referencia).offsetTop;
    let alturaElementoTratada = alturaElemento < alturaNavegador ? 0 : alturaElemento - alturaNavegador;
    let alturaRolagem = document.documentElement.scrollTop;
    let distancia = Math.floor(alturaElementoTratada - alturaRolagem);
    let y = alturaRolagem;

    if (distancia > 0 && distancia > Utilidade.tarefaIncremento) y += Utilidade.tarefaIncremento;
    if (distancia > 0 && distancia <= Utilidade.tarefaIncremento) y = alturaElementoTratada;
    if (distancia < 0 && distancia < Utilidade.tarefaIncremento) y -= Utilidade.tarefaIncremento;
    if (distancia < 0 && distancia >= Utilidade.tarefaIncremento) y = alturaElementoTratada;
    
    Utilidade.Registrar('rolagemAutomatica', `alturaElemento: ${alturaElementoTratada} | alturaRolagem: ${alturaRolagem} | distancia: ${distancia} | y: ${y}`);

    window.scrollTo(0, y);

    return alturaElementoTratada == y ? 0 : distancia;
  }

  static RolarAte(referencia: string): void {
    if(this.tarefaIdentidade != null) return;

    this.tarefaIdentidade = setInterval(() => {
      var resultado = Utilidade.FuncaoRolagemAte(referencia)

      if (resultado == 0) {
        Utilidade.Registrar('rolagemAutomatica', 'finalizado');
        clearInterval(this.tarefaIdentidade);
        this.tarefaIdentidade = null;
      }
    }, this.tarefaVelocidade);
  }

 
  static GerenciadorFuncao = (funcao: Function, milissegundos: number): void => {
    //don't run the function while throttle timer is true
    if (Utilidade.gerenciadorFuncaoPermitidoExecutar) return;
     
    //first set throttle timer to true so the function doesn't run
    Utilidade.gerenciadorFuncaoPermitidoExecutar = true;
     
    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        funcao();
        Utilidade.gerenciadorFuncaoPermitidoExecutar = false;
    }, milissegundos);
}

  static PossivelAnimar(elemento: Element, classPermitida: string = null): boolean {
    let areaElemento = elemento.getBoundingClientRect();
    let telaTamanho = window.innerHeight;
    let alturaRolagem = window.pageYOffset;
    let telaMargemAdaptativa = telaTamanho * this.porcentagemMargemAdapativa / 100;
    let alturaElementoReferenteTopoTela = Math.abs(areaElemento.top);
    var alturaElementoCalculada = alturaElementoReferenteTopoTela - telaTamanho;
    
    let condicao1 = classPermitida == null || Array.from(elemento.classList).find(x => x.startsWith(classPermitida)) != null;
    let condicao2 = alturaElementoCalculada <= 0 || alturaElementoCalculada - telaMargemAdaptativa <= alturaRolagem;

    return condicao1 && condicao2;
  }

  static PegarIdPai(elemento: Element): string {
    let elementoPai = elemento?.parentElement; 
    let id = elementoPai?.id;

    if (elementoPai == null || elementoPai == undefined) return 'null'; 

    return id != null && id != undefined && id != '' ? id : Utilidade.PegarIdPai(elemento.parentElement);
  }

}