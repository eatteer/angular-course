import { Component } from '@angular/core';
import { SideMenuItem } from '../interfaces/shared.interfaces';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [],
})
export class SideMenuComponent {
  public templateRoutes: SideMenuItem[] = [
    { label: 'Basics', path: '/template/basics' },
    { label: 'Dynamics', path: '/template/dynamics' },
    { label: 'Switches', path: '/template/switches' },
  ];

  public reactiveRoutes: SideMenuItem[] = [
    { label: 'Basics', path: '/reactive/basics' },
    { label: 'Dynamics', path: '/reactive/dynamics' },
    { label: 'Switches', path: '/reactive/switches' },
  ];
}
