import { Component } from '@angular/core';
import { StateManagerService } from 'src/app/services/state-manager.service';
import { item_fade, menu_slide, resize } from 'src/app/utils/animations';
import { device_type } from 'src/app/utils/interfaces';
import { nav_elements } from 'src/app/utils/nav_items';

interface dropdown_menu {
  [key: string]: boolean;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  animations: [menu_slide, item_fade, resize],
})
export class SidemenuComponent {
  device: device_type = 'mobile';
  menu_visible: boolean = false;
  nav_itens = nav_elements;
  imgs_path: string = '/assets/images/';
  dropdown: dropdown_menu = {};

  constructor(private sm: StateManagerService) {
    this.sm.menu_state.subscribe((value) => {
      this.menu_visible = value;
    });

    sm.curr_device.subscribe((value) => (this.device = value));
  }

  toggle_dropdown(index: string) {
    this.dropdown[index] = !this.dropdown[index];
  }
}
