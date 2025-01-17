import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { device_type } from '../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  menu_state = new BehaviorSubject<boolean>(false);
  curr_device = new BehaviorSubject<device_type>('mobile');

  constructor() {
    if (window.innerWidth > 480) this.curr_device.next('tablet');
    if (window.innerWidth > 769) this.curr_device.next('desktop');
  }

  toggle_sidemenu() {
    this.menu_state.next(!this.menu_state.value);
  }
}
