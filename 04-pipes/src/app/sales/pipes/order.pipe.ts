import { Pipe, PipeTransform } from '@angular/core';
import { Hero, FilterOrder } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(value: Hero[], filter?: FilterOrder): Hero[] {
    if (filter) {
      switch (filter) {
        case 'name':
          return value.sort((a, b) => (a.name > b.name ? 1 : -1));
        case 'fly':
          return value.sort((a, _) => (a.fly ? -1 : 1));
        case 'color':
          return value.sort((a, b) => (a.color > b.color ? 1 : -1));
        default:
          return value;
      }
    }
    return value;
  }
}
