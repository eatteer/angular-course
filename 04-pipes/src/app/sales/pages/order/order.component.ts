import { Component } from '@angular/core';
import { Hero, Color, FilterOrder } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public inUpper: boolean = true;

  public heroes: Hero[] = [
    { name: 'Spider-Man', fly: false, color: Color.Red },
    { name: 'Superman', fly: true, color: Color.Blue },
    { name: 'Batman', fly: false, color: Color.Black },
    { name: 'Robin', fly: false, color: Color.Green },
    { name: 'Daredevil', fly: false, color: Color.Red },
    { name: 'Green Lantern', fly: true, color: Color.Green },
  ];

  public filterOrder: FilterOrder = 'fly';

  public toggleInUpper(): void {
    this.inUpper = !this.inUpper;
  }

  public setFilterOrder(filter: FilterOrder): void {
    this.filterOrder = filter;
  }
}
