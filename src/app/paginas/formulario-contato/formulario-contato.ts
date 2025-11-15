import {Component, OnInit} from '@angular/core';
import {Container} from '../../componentes/container/container';
import {Separador} from '../../componentes/separador/separador';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ContatoService} from '../../services/contato.service';
import {MensagemErro} from '../../componentes/mensagem-erro/mensagem-erro';
import {Cabecalho} from '../../componentes/cabecalho/cabecalho';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    Container,
    Separador,
    ReactiveFormsModule,
    NgClass,
    RouterLink,
    MensagemErro,
    Cabecalho,
  ],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato implements OnInit {

  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.iniciarFormulario();
    this.carregarContato();
  }

  iniciarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      numero: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255)]),
      aniversario: new FormControl(''),
      redes: new FormControl('', Validators.maxLength(255)),
      observacoes: new FormControl('', Validators.maxLength(255)),
      avatar: new FormControl('', Validators.required),
    });
  }

  salvarContato() {
    const novoContato = this.contatoForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    novoContato.id = id ? parseInt(id) : null;

    this.contatoService.editarOuSalvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/listaContatos');
    });
  }

  cancelar() {
    this.contatoForm.reset();
    this.router.navigateByUrl('/listaContatos');
  }

  carregarContato() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe(contato => {
        this.contatoForm.patchValue(contato);
      });
    }
  }

  aoSelecionarArquivo(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.lerArquivo(file);
    }
  }

  lerArquivo(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.result) {
        this.contatoForm.get("avatar")?.setValue(reader.result);
      }
    }
    reader.readAsDataURL(file);
  }

  obterControle(nome: string): FormControl {
    const control = this.contatoForm.get(nome);
    if(!control){
      throw new Error('Controle de formulario não encontrado' + nome);
    }

    return control as FormControl;
  }
}
