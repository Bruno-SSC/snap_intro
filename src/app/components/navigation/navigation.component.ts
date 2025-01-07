import { Component } from '@angular/core';

type device_type = 'mobile' | 'tablet' | 'desktop';

interface dropdown_menu {
  [key: string]: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  device: device_type = 'mobile';
  menu_visible: boolean = true;

  dropdown: dropdown_menu = {
    features: false,
    company: false,
  };

  constructor() {
    if (window.innerWidth > 769) this.device = 'tablet';
  }

  toggle_dropdown(index: string) {
    this.dropdown[index] = !this.dropdown[index];
  }
}
