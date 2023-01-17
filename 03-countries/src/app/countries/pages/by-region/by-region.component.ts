import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  public regions: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  public activeRegion: string = '';
  public countries: Country[] = [];

  public constructor(private countriesService: CountriesService) {}

  public setActiveRegion(region: string): void {
    if (region === this.activeRegion) return;
    this.activeRegion = region;
    this.countries = [];
    this.countriesService.searchByRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }

  public styleButton(region: string): string {
    return region !== this.activeRegion ? 'btn-outline-primary' : 'btn-primary';
  }
}
