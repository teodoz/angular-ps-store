import { Component, Input } from '@angular/core';
import { GameModel } from '../list/list.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() game!: GameModel;
}
