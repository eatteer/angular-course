import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  public term: string = '';
  public countries: Country[] = [];
  public error: boolean = false;

  public constructor(private countriesService: CountriesService) {}

  public submit(term: string): void {
    this.error = false;
    this.term = term;
    this.countriesService.searchByCapital(term).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: () => {
        this.error = true;
        this.countries = [];
      },
    });
  }

  public getSuggestions(term: string): void {
    this.error = false;
    console.log(term);
  }
}
