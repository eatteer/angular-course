import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      .navigation-menu {
        position: fixed;
        margin: 2rem;
        z-index: 1000;
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
      icon: 'fa-solid fa-expand',
    },
    {
      label: 'Zoom',
      path: '/maps/zoom',
      icon: 'fa-solid fa-magnifying-glass',
    },
    {
      label: 'Markers',
      path: '/maps/markers',
      icon: 'fa-solid fa-location-dot',
    },
    {
      label: 'Properties',
      path: '/maps/properties',
      icon: 'fa-solid fa-house',
    },
  ];
}
