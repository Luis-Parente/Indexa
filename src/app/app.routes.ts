import { Routes } from '@angular/router';
import {FormularioContato} from './paginas/formulario-contato/formulario-contato';
import {ListaContatos} from './paginas/lista-contatos/lista-contatos';
import {PerfilContato} from './paginas/perfil-contato/perfil-contato';

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioContato
  },
  {
    path: 'formulario/:id',
    component: FormularioContato
  },
  {
    path: 'listaContatos',
    component: ListaContatos
  },
  {
    path: 'perfil-contato/:id',
    component: PerfilContato,
  },
  {
    path: '',
    redirectTo: '/listaContatos',
    pathMatch: 'full'
  }
];
