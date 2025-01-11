import { Component } from '@angular/core';
import { device_type, StateManagerService } from 'src/app/services/state-manager.service';

interface dropdown_menu {
  [key: string]: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  dropdown: dropdown_menu = {
    features: false,
    company: false,
  };

  constructor(private sm: StateManagerService) {}

  toggle_dropdown(index: string) {
    this.dropdown[index] = !this.dropdown[index];
  }

  check_device(type: device_type) {
    return this.sm.retrieve_device() === type;
  }
}
