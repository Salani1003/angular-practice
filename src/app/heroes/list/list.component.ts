import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroNames: string[] = [
    'IronMan',
    'Spiderman',
    'Thor',
    'Hulk',
    'Captain America',
  ];

  ultimoHeroeBorrado?: string;

  deleteHero(): void {
    this.ultimoHeroeBorrado = this.heroNames.pop();
  }
}
