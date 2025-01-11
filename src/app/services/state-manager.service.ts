import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type device_type = 'mobile' | 'tablet' | 'desktop';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  menu_state = new Subject<boolean>();

  private menu_visible: boolean = false;
  private device: device_type = 'mobile';

  constructor() {
    if (window.innerWidth > 480) this.device = 'tablet';
    if (window.innerWidth > 769) this.device = 'desktop';
  }

  toggle_sidemenu() {
    this.menu_visible = !this.menu_visible;
    this.menu_state.next(this.menu_visible);
  }

  retrieve_device() {
    return this.device;
  }

  retrieve_sidemenu_state() {
    return this.menu_visible;
  }
}
