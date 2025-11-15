import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [
    CommonModule
  ],
  templateUrl: './container.html',
  styleUrls: ['./container.css'],
})
export class Container { }
