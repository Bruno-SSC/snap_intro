import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { device_type } from '../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  menu_state = new BehaviorSubject<boolean>(false);
  curr_device = new BehaviorSubject<device_type>('mobile');

  constructor() {
    this.check_device();
    window.addEventListener('resize', () => {
      this.check_device();
    });
  }

  check_device() {
    let new_device: device_type;

    if (window.innerWidth > 769) new_device = 'desktop';
    else new_device = 'mobile';

    if (new_device != this.curr_device.getValue()) {
      this.curr_device.next(new_device);
    }
  }

  toggle_sidemenu() {
    this.menu_state.next(!this.menu_state.value);
  }
}
