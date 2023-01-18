import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fly' })
export class FlyPipe implements PipeTransform {
  public transform(value: boolean): string {
    return value ? 'fly' : 'does not fly';
  }
}
