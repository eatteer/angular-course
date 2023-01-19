import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    const path: string = `/assets/heroes/${hero.id}.jpg`;
    return path;
  }
}
