import { Component } from '@angular/core';
import { StateManagerService } from 'src/app/services/state-manager.service';
import { device_type } from 'src/app/utils/interfaces';

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
  menu_visible: boolean = true;
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
