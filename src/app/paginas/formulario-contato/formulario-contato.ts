import {Component, OnInit} from '@angular/core';
import {Container} from '../../componentes/container/container';
import {Separador} from '../../componentes/separador/separador';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {ContatoService} from '../../services/contato.service';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    Container,
    Separador,
    ReactiveFormsModule,
    NgClass,
    RouterLink,
  ],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato implements OnInit {

  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router) {
  }

  ngOnInit() {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      numero: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255)]),
      aniversario: new FormControl(''),
      redes: new FormControl('', Validators.maxLength(255)),
      observacoes: new FormControl('', Validators.maxLength(255)),
    });
  }

  salvarContato() {
    const novoContato = this.contatoForm.value;
    this.contatoService.salvarContato(novoContato);
    this.contatoForm.reset();
    this.router.navigateByUrl('/listaContatos');
  }

  cancelar() {
    console.log('Cancelar');
  }
}
