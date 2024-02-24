import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  constructor(private countriesService: CountriesService) { }

  countries: Country[] = []

  searchByCapital(value: string) {
    this.countriesService.searchCapital(value)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
