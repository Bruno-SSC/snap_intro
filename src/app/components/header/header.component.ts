import { Component } from '@angular/core';
import { StateManagerService } from 'src/app/services/state-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private sm: StateManagerService) {}

  toggle_sidemenu() {
    this.sm.toggle_sidemenu();
  }

  check_device(type: string) {
    const device = this.sm.retrieve_device();
    return device == type;
  }
}
