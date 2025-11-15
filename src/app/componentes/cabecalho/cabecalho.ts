import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {
  @Input() titulo: string = '';
  @Input() bannerSrc  : string = '';
  @Input() telaInicial: boolean = false;
}
