import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  public constructor(private gifsService: GifsService) {}

  public get history(): string[] {
    return this.gifsService.history;
  }

  public search(query: string): void {
    this.gifsService.search(query).subscribe();
  }
}
