import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    let path: string = '/assets/no-image.png';
    if (hero.id) path = `/assets/heroes/${hero.id}.jpg`;
    if (hero.alt_img) path = hero.alt_img;
    return path;
  }
}
