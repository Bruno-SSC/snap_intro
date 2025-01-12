import { Component } from '@angular/core';
import { StateManagerService } from 'src/app/services/state-manager.service';
interface dropdown_menu {
  [key: string]: boolean;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  dropdown: dropdown_menu = {
    features: false,
    company: false,
  };
  
  constructor(private sm: StateManagerService) {}

  toggle_sidemenu() {
    this.sm.toggle_sidemenu();
  }

  check_device(type: string) {
    const device = this.sm.retrieve_device();
    return device == type;
  }

  toggle_dropdown(index: string) {
    this.dropdown[index] = !this.dropdown[index];
  }
}
