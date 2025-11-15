import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class ContatoComponent {
  @Input() nome: string = "";
  @Input() telefone: string = "";
}
