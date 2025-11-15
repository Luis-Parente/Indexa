import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-contato',
  imports: [
    RouterLink
  ],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  @Input() nome: string = "";
  @Input() numero: string = "";
  @Input() id?: number;
  @Input() avatar: string | ArrayBuffer = '';
}
