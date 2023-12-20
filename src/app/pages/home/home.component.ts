import { Component } from '@angular/core';
import { GameModel } from '../../components/list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  games: GameModel[];
  constructor() {
    this.games = [
      {
        title: 'DARK SOULS™: REMASTERED',
        price: 179.9,
        platform: 'PS4',
        imgUrl: '/assets/images/darksouls.jpg',
      },
      {
        title: 'God of War Ragnarök: Valhalla',
        price: 0,
        platform: 'PS5',
        imgUrl: '/assets/images/valhalla.jpg',
      },
      {
        title: 'Marvel’s Spider-Man 2',
        price: 349.9,
        platform: 'PS5',
        imgUrl: '/assets/images/spiderman2.jpg',
      },
      {
        title: 'Baldur`s Gate 3',
        price: 299.9,
        platform: 'PS4',
        imgUrl: '/assets/images/baldursgate3.jpg',
      },
    ];
  }
}
