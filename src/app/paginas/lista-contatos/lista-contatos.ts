import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Cabecalho} from '../../componentes/cabecalho/cabecalho';
import {Container} from '../../componentes/container/container';
import {Contato} from '../../componentes/contato/contato';
import {FormsModule} from '@angular/forms';
import {Separador} from '../../componentes/separador/separador';
import {RouterLink} from '@angular/router';
import {ContatoService} from '../../services/contato.service';
import {DadosContato} from '../../componentes/contato/dados.contato';
import {PerfilContato} from '../perfil-contato/perfil-contato';

@Component({
  selector: 'app-lista-contatos',
  imports: [
    Cabecalho,
    Container,
    Contato,
    FormsModule,
    Separador,
    RouterLink,
  ],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.css',
})

export class ListaContatos implements OnInit {

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: DadosContato[] = [];
  filtroPorTexto: string = "";

  constructor(private contatoService: ContatoService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.contatoService.obterContatos().subscribe(contatos => {
      console.log(contatos);
      this.contatos = contatos;
      this.cdr.detectChanges();
    });
  }

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): DadosContato[] {
    if (!this.filtroPorTexto.length) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.filtroPorTexto.toLowerCase());
    });
  }

  filtrarContatosPorLetraInicial(letra: string): DadosContato[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(letra);
    })
  }
}
