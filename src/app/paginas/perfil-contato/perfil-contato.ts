import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Container} from '../../componentes/container/container';
import {DadosContato} from '../../componentes/contato/dados.contato';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ContatoService} from '../../services/contato.service';
import {CommonModule} from '@angular/common';
import {Separador} from '../../componentes/separador/separador';

@Component({
  standalone: true,
  selector: 'app-perfil-contato',
  imports: [
    Container,
    RouterLink,
    CommonModule,
    Separador,
  ],
  templateUrl: './perfil-contato.html',
  styleUrls: ['./perfil-contato.css'],
})
export class PerfilContato implements OnInit {

  contato: DadosContato = {
    id: 0,
    nome: '',
    numero: '',
    email: '',
    aniversario: '',
    redes: '',
    avatar: '',
  }

  constructor(private activatedRoute: ActivatedRoute, private contatoService: ContatoService, private cdr: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe(contato => {
        this.contato = contato;
        this.cdr.detectChanges();
      })
    }
  }

  excluirContato() {
    if(this.contato.id){
      this.contatoService.excluirPorId(this.contato.id).subscribe(contato => {
        this.router.navigateByUrl("/listaContatos");
      })
    }
  }
}
