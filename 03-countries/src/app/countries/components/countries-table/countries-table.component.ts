import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styles: [],
})
export class CountriesTableComponent {
  @Input()
  public countries: Country[] = [];
}
