import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor(private countriesService: CountriesService) { }

  countries: Country[] = []
  public isLoading: boolean = false

  searchByRegion(value: string) {

    this.isLoading = true

    this.countriesService.searchRegion(value)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false
      })
  }
}
