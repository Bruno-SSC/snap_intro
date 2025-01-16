import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-strip',
  templateUrl: './brand-strip.component.html',
  styleUrls: ['./brand-strip.component.scss'],
})
export class BrandStripComponent {
  imgs_folder: string = '/assets/images/';
  client_list = [
    {
      name: 'databiz',
      icon_path: 'client-databiz.svg',
      alt: 'databiz client logo',
    },
    {
      name: 'audiophile',
      icon_path: 'client-audiophile.svg',
      alt: 'audiophile client logo',
    },
    {
      name: 'meet',
      icon_path: 'client-meet.svg',
      alt: 'meet client logo',
    },
    {
      name: 'maker',
      icon_path: 'client-maker.svg',
      alt: 'maker client logo',
    },
  ];
}
