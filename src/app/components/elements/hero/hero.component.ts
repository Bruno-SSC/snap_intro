import { Component, Input } from '@angular/core';
import { StateManagerService } from 'src/app/services/state-manager.service';
import { device_type } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() device: device_type = 'mobile';

  constructor(private sm: StateManagerService) {
    this.sm.curr_device.subscribe((val) => (this.device = val));
  }

  set_src(): string {
    if (this.device == 'mobile') return '/assets/images/image-hero-desktop.png';
    else return '/assets/images/image-hero-mobile.png';
  }
}
