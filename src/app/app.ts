import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Cabecalho, Separador, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Dados_Contato[] = agenda;

  filtrarContatosPorLetraInicial(letra: string) : Dados_Contato[] {
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    })
  }
}
