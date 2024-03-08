import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  constructor(private countriesService: CountriesService) { }

  countries: Country[] = []
  public isLoading: boolean = false

  searchByCountry(value: string) {

    this.isLoading = true

    this.countriesService.searchCountry(value)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false
      })
  }
}
