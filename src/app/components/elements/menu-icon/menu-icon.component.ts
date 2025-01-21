import { Component } from '@angular/core';
import { StateManagerService } from 'src/app/services/state-manager.service';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss'],
})
export class MenuIconComponent {
  menu_visible: boolean = false;
  imgs_path: string = '/assets/images/';

  constructor(private sm: StateManagerService) {
    this.sm.menu_state.subscribe((value) => {
      this.menu_visible = value;
      // ! why value keeps increasing?
    });
  }

  toggle_sidemenu() {
    this.sm.toggle_sidemenu();
  }

  set_icon(): string {
    if (this.menu_visible) return 'icon-close-menu.svg';
    else return 'icon-menu.svg';
  }
}
