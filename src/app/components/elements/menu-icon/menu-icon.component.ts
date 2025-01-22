import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { StateManagerService } from 'src/app/services/state-manager.service';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss'],
})
export class MenuIconComponent {
  destroy$ = new Subject<void>(); // the "$" is only a naming convention for observables.
  menu_visible: boolean = false;
  imgs_path: string = '/assets/images/';

  constructor(private sm: StateManagerService) {}

  ngOnInit() {
    // briefly, pipe is used to add 'operators' to an observable stream and 'takeUntil' is a rxjs operator used to unsubscribe based on a subject signal.
    // this is the pre-defined use of this. It's not something you need to know but look into rxjs docs or learn rxjs to use. Don't worry about how pipe works or which operators can be used for now.

    this.sm.menu_state.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.menu_visible = value;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggle_sidemenu() {
    this.sm.toggle_sidemenu();
  }

  set_icon(): string {
    if (this.menu_visible) return 'icon-close-menu.svg';
    else return 'icon-menu.svg';
  }
}
