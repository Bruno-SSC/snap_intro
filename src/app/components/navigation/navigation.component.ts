import { Component } from '@angular/core';

type device_type = 'mobile' | 'tablet' | 'desktop';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  device: device_type = 'mobile';
  menu_visible: boolean = true;

  constructor() {
    if (window.innerWidth > 769) this.device = 'tablet';
  }
}
