import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interfaces';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styles: [],
})
export class CountryDetailComponent implements OnInit {
  public country?: Country;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    // Chain subscriptions:
    // 1. activatedRoute
    // 2. countriesService.searchByCode
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) =>
          this.countriesService.searchByCode(params.get('code')!)
        )
      )
      .subscribe({
        next: (country) => (this.country = country),
        error: () => this.router.navigate(['']),
      });

    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const code: string = params.get('code')!;
    //   this.countriesService.searchByCode(code).subscribe((country) => {
    //     this.country = country;
    //   });
    // });
  }
}
