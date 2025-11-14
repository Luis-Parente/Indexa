import { Routes } from '@angular/router';
import {FormularioContato} from './paginas/formulario-contato/formulario-contato';
import {ListaContatos} from './paginas/lista-contatos/lista-contatos';

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioContato
  },
  {
    path: 'listaContatos',
    component: ListaContatos
  },
  {
    path: '',
    redirectTo: '/listaContatos',
    pathMatch: 'full'
  }
];
