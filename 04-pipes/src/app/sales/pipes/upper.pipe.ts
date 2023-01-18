import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'upper' })
export class UpperPipe implements PipeTransform {
  public transform(value: string, inUpper: boolean = true): string {
    if (!inUpper) return value.toLowerCase();
    return value.toUpperCase();
  }
}
