import { Component } from '@angular/core';

import {
  device_type,
  StateManagerService,
} from 'src/app/services/state-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  device: device_type = 'mobile';
  constructor(private sm: StateManagerService) {
    sm.curr_device.subscribe((value) => (this.device = value));
  }

  is_device(type: string): boolean {
    return this.device == type;
  }
}
