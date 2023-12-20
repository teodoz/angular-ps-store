import { Component, Input } from '@angular/core';

export interface GameModel {
  title: string;
  imgUrl: string;
  price: number;
  platform: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() games: GameModel[];

  constructor() {
    this.games = [];
  }
}
