import {Injectable} from '@angular/core';
import {DadosContato} from '../componentes/contato/dados.contato';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {

  private readonly API = "http://localhost:8080/contatos";

  constructor(private http: HttpClient) {
  }

  obterContatos(): Observable<DadosContato[]> {
    return this.http.get<DadosContato[]>(this.API);
  }

  salvarContato(novoContato: DadosContato): Observable<DadosContato> {
    return this.http.post<DadosContato>(this.API, novoContato);
  }

  buscarPorId(id: number): Observable<DadosContato> {
    return this.http.get<DadosContato>(`${this.API}/${id}`);
  }

  excluirPorId(id: number): Observable<DadosContato> {
    return this.http.delete<DadosContato>(`${this.API}/${id}`);
  }

  editarPorId(contato: DadosContato): Observable<DadosContato> {
    return this.http.put<DadosContato>(`${this.API}/${contato.id}`, contato);
  }

  editarOuSalvarContato(contato: DadosContato) {
    if (contato.id) {
      return this.editarPorId(contato);
    } else {
      return this.salvarContato(contato);
    }
  }
}
