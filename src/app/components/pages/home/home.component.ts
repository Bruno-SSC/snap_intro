import { Component } from '@angular/core';

import { StateManagerService } from 'src/app/services/state-manager.service';
import { main_anim, header_anim, item_fade } from 'src/app/utils/animations';
import { device_type } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [main_anim, header_anim, item_fade],
})
export class HomeComponent {
  device: device_type = 'mobile';
  menu_visible: boolean = false;

  constructor(private sm: StateManagerService) {
    this.sm.curr_device.subscribe((value) => {
      this.device = value;
    });

    this.sm.menu_state.subscribe((value) => {
      this.menu_visible = value;
    });
  }

  is_device(type: string): boolean {
    return this.device == type;
  }
}
