import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  public term: string = '';
  public countries: Country[] = [];
  public error: boolean = false;

  public constructor(private countriesService: CountriesService) {}

  public submit(term: string): void {
    this.term = term;
    this.error = false;
    this.countriesService.searchByName(this.term).subscribe({
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
