import { Component } from '@angular/core';

interface dropdown_menu {
  [key: string]: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  dropdown: dropdown_menu = {
    features: false,
    company: false,
  };
  toggle_dropdown(index: string) {
    this.dropdown[index] = !this.dropdown[index];
  }
}
