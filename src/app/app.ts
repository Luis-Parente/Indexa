import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Container} from './componentes/container/container';
import {Cabecalho} from './componentes/cabecalho/cabecalho';
import {Separador} from './componentes/separador/separador';
import {Contato} from './componentes/contato/contato';

interface Dados_Contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json'
import {FormsModule} from '@angular/forms';
import {FormularioContato} from './paginas/formulario-contato/formulario-contato';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Container,
    Cabecalho,
    Separador,
    Contato,
    FormsModule,
    FormularioContato
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Dados_Contato[] = agenda;

  filtroPorTexto: string = "";

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): Dados_Contato[] {
    if (!this.filtroPorTexto.length) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.filtroPorTexto.toLowerCase());
    });
  }

  filtrarContatosPorLetraInicial(letra: string): Dados_Contato[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(letra);
    })
  }
}
