import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { switchMap, tap, map, combineLatest } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styles: [],
})
export class SelectorComponent implements OnInit {
  public form = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    border: ['', [Validators.required]],
  });

  public regions: string[] = [];
  public countries: Country[] = [];
  public borders: Country[] = [];

  public constructor(
    private fb: NonNullableFormBuilder,
    private countriesService: CountriesService
  ) {}

  public ngOnInit(): void {
    this.regions = this.countriesService.getRegions();

    this.controls.region.valueChanges
      .pipe(
        switchMap((region) => this.countriesService.getCountries(region)),
        tap(() => this.controls.country.reset(undefined, { emitEvent: false }))
      )
      .subscribe((countries) => (this.countries = countries));

    this.controls.country.valueChanges
      .pipe(
        // Fetch selected country.
        switchMap((code) => this.countriesService.getCountry(code)),
        // Create an array of ajax observables from borders of selected country.
        map((country) =>
          country.borders.map((code) => this.countriesService.getCountry(code))
        ),
        // Create an observable of observables.
        // Each inner observable needs to emit at least once
        // So the resulting array of emissions can be build.
        switchMap((borders) => combineLatest(borders)),
        tap(() => this.controls.border.reset(undefined, { emitEvent: false }))
      )
      .subscribe((countries) => (this.borders = countries));
  }

  public get controls() {
    return this.form.controls;
  }

  public submit(): void {
    console.log(this.form);
  }
}
