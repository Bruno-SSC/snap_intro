import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export type device_type = 'mobile' | 'tablet' | 'desktop';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  menu_state = new Subject<boolean>();
  curr_device = new BehaviorSubject<device_type>('mobile');

  private menu_visible: boolean = false;
  private device: device_type = 'mobile';

  constructor() {
    if (window.innerWidth > 480) {
      this.device = 'tablet';
      this.curr_device.next(this.device);
    }

    if (window.innerWidth > 769) {
      this.device = 'desktop';
      this.curr_device.next(this.device);
    }
  }

  toggle_sidemenu() {
    this.menu_visible = !this.menu_visible;
    this.menu_state.next(this.menu_visible);
  }

  retrieve_sidemenu_state() {
    return this.menu_visible;
  }
}
