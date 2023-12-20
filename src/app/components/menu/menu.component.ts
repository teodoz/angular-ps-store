import { Component, Input } from '@angular/core';

export interface MenuModel {
  label: string;
  url: string;
  active: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() mobile!: boolean;
  @Input() show!: boolean;
  menu: MenuModel[];

  constructor() {
    this.menu = [
      {
        label: 'Novidades',
        url: '#',
        active: true,
      },
      {
        label: 'Coleções',
        url: '#',
        active: false,
      },
      {
        label: 'Ofertas',
        url: '#',
        active: false,
      },
      {
        label: 'Assinaturas',
        url: '#',
        active: false,
      },
      {
        label: 'Navegar',
        url: '#',
        active: false,
      },
    ];
  }

  toggleMenu() {
    this.show = !this.show;
  }
}
