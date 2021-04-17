import { Component } from '@angular/core';

interface Horario {
  inicio: string;
  final: string;
}

interface IntervaloFuncionamento {
  titulo: string;
  horarios: Horario[];
};

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  imagemPratoFinal = 'assets/prato-final.png';
  titulo = 'Fale com a gente';

  localTitulo = 'Local';
  enderecoImagemTag = 'map';
  telefoneImagemTag = 'local_phone';
  emailImagemTag = 'alternate_email';
  enderecoTexto = 'Rua por extenso, número - Cidade, UF';
  telefoneTexto = '+15 0000-0000';
  emailTexto = 'email@email.com';

  invervalos: IntervaloFuncionamento[] = [
    { titulo: 'Segunda a Sexta', horarios: [ { inicio: '08:00', final: '12:00'}, { inicio: '13:00', final: '16:00'} ] },
    { titulo: 'Sábado', horarios: [ { inicio: '08:00', final: '12:00' } ] }
  ];
  horarioTitulo = 'Horário de Serviço';
  intervalo1Texto = 'Segunda a Sexta';
  intervalo2Texto = 'Sábado';

  whatsappTitulo = 'Contato';
  whatsappDescricao = 'Testeee, testtando, escrito algo bla bla bla';
  whatsappBotaoTexto = 'Abrir WhatsApp';

}
