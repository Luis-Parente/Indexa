import {Component, OnInit} from '@angular/core';
import {Cabecalho} from '../../componentes/cabecalho/cabecalho';
import {Container} from '../../componentes/container/container';
import {Contato} from '../../componentes/contato/contato';
import {FormsModule} from '@angular/forms';
import {Separador} from '../../componentes/separador/separador';
import {RouterLink} from '@angular/router';
import {ContatoService} from '../../services/contato.service';

interface Dados_Contato {
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-lista-contatos',
  imports: [
    Cabecalho,
    Container,
    Contato,
    FormsModule,
    Separador,
    RouterLink
  ],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.css',
})

export class ListaContatos implements OnInit {

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Dados_Contato[] = [];
  filtroPorTexto: string = "";

  constructor(private contatoService: ContatoService) {
  }

  ngOnInit() {
    this.contatos = this.contatoService.obterContatos();
  }

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
