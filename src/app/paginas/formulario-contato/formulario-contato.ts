import {Component} from '@angular/core';
import {Container} from '../../componentes/container/container';
import {Separador} from '../../componentes/separador/separador';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    Container,
    Separador,
    ReactiveFormsModule,
  ],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato {

  contatoForm!: FormGroup;

  constructor() {
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
    if (this.contatoForm.valid) {
      console.log(this.contatoForm.value);
    }
  }

  cancelar() {
    console.log('Cancelar');
  }
}
