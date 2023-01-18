import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Angular pipes',
        icon: 'pi pi-home',
        items: [
          { label: 'Text and dates', icon: 'pi pi-calendar', routerLink: '/' },
          {
            label: 'Numbers',
            icon: 'pi pi-sort-numeric-down',
            routerLink: '/numbers',
          },
          {
            label: 'Uncommons',
            icon: 'pi pi-globe',
            routerLink: '/uncommons',
          },
        ],
      },
      { label: 'Custom pipes', icon: 'pi pi-cog', routerLink: '/order' },
    ];
  }
}
