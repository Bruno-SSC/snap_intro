import { Component } from '@angular/core';
import {
  device_type,
  StateManagerService,
} from 'src/app/services/state-manager.service';

import { nav_items } from 'src/app/utils/interfaces';
import { nav_elements } from 'src/app/utils/nav_items';

interface dropdown_menu {
  [key: string]: boolean;
}

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss', './desktop.component.scss'],
})
export class HeaderNavComponent {
  device: device_type = 'mobile';
  nav_elements: nav_items[] = nav_elements;
  dropdown: dropdown_menu = {};

  constructor(private sm: StateManagerService) {
    sm.curr_device.subscribe((value) => (this.device = value));
    
    this.nav_elements.forEach((el) => {
      this.dropdown[el.title] = false;
    });
  }

  toggle_sidemenu() {
    this.sm.toggle_sidemenu();
  }

  toggle_dropdown(index: string) {
    this.dropdown[index] = !this.dropdown[index];
  }
}
