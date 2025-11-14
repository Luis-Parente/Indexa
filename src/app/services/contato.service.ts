import {Injectable} from '@angular/core';
import {DadosContato} from '../componentes/contato/dados-contato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {

  private contatos: DadosContato[] = [];

  constructor() {

    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage =
      contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;
    if (contatosLocalStorage !== null) {
      this.contatos = contatosLocalStorage || null;
    }
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(novoContato: DadosContato): void {
    this.contatos.push(novoContato);

    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
