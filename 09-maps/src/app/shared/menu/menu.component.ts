import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      #menu {
        width: 230px;
      }
    `,
  ],
})
export class MenuComponent {
  public items: MenuItem[] = [
    {
      label: 'Fullscreen',
      path: '/maps/fullscreen',
    },
    {
      label: 'Zoom',
      path: '/maps/zoom',
    },
    {
      label: 'Markers',
      path: '/maps/markers',
    },
    {
      label: 'Properties',
      path: '/maps/properties',
    },
  ];
}
