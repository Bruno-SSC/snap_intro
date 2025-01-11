import { Component } from '@angular/core';
import { StateManagerService } from 'src/app/services/state-manager.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  menu_visible: boolean = false;

  constructor(private sm: StateManagerService) {
    this.sm.menu_state.subscribe((value) => {
      this.menu_visible = value;
    });
  }

  close_menu() {
    this.sm.toggle_sidemenu();
  }
}
