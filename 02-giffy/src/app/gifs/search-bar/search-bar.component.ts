import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent {
  @ViewChild('searchInput')
  public searchInputRef!: ElementRef<HTMLInputElement>;

  public constructor(private gifsService: GifsService) {}

  public search(): void {
    const { value } = this.searchInputRef.nativeElement;
    if (value.trim().length === 0) return;
    this.gifsService.search(value).subscribe();
    this.clearInputs();
  }

  public clearInputs(): void {
    this.searchInputRef.nativeElement.value = '';
  }
}
