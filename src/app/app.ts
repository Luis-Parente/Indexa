import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';

import {FormularioContato} from './paginas/formulario-contato/formulario-contato';
import {ListaContatos} from './paginas/lista-contatos/lista-contatos';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    FormularioContato,
    ListaContatos,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
