import { Component } from '@angular/core';

import {
  device_type,
  StateManagerService,
} from 'src/app/services/state-manager.service';
interface dropdown_menu {
  [key: string]: boolean;
}

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  device: device_type = 'mobile';

  dropdown: dropdown_menu = {
    features: false,
    company: false,
  };

  constructor(private sm: StateManagerService) {
    sm.curr_device.subscribe((value) => (this.device = value));
  }

  toggle_sidemenu() {
    this.sm.toggle_sidemenu();
  }

  toggle_dropdown(index: string) {
    this.dropdown[index] = !this.dropdown[index];
  }
}
