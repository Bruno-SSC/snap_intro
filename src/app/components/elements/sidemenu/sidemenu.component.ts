import { Component } from '@angular/core';
import {
  device_type,
  StateManagerService,
} from 'src/app/services/state-manager.service';

interface dropdown_menu {
  [key: string]: boolean;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  device: device_type = 'mobile';
  menu_visible: boolean = false;
  dropdown: dropdown_menu = {
    features: false,
    company: false,
  };

  constructor(private sm: StateManagerService) {
    this.sm.menu_state.subscribe((value) => {
      this.menu_visible = value;
    });

    sm.curr_device.subscribe((value) => (this.device = value));
  }

  toggle_dropdown(index: string) {
    this.dropdown[index] = !this.dropdown[index];
  }

  close_menu() {
    this.sm.toggle_sidemenu();
  }
}
