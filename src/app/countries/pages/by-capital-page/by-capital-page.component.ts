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
  public isLoading: boolean = false

  searchByCapital(value: string) {

    this.isLoading = true

    this.countriesService.searchCapital(value)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false
      })
  }
}
