import { Component } from '@angular/core';
import { StateManagerService } from 'src/app/services/state-manager.service';

interface dropdown_menu {
  [key: string]: boolean;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  menu_visible: boolean = false;
  dropdown: dropdown_menu = {
    features: false,
    company: false,
  };

  constructor(private sm: StateManagerService) {
    this.sm.menu_state.subscribe((value) => {
      this.menu_visible = value;
    });
  }

  toggle_dropdown(index: string) {
    this.dropdown[index] = !this.dropdown[index];
  }

  close_menu() {
    this.sm.toggle_sidemenu();
  }

  check_device(type: string) {
    const device = this.sm.retrieve_device();
    return device == type;
  }
}
