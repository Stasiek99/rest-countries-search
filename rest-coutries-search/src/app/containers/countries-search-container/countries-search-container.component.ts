import { Component, } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

import { Country } from "../../types/country";
import { CountrySearchService } from "../../services/countries-search-service";


@Component({
  selector: 'app-countries-search-container',
  templateUrl: './countries-search-container.component.html',
  styleUrls: ['./countries-search-container.component.scss']
})
export class CountriesSearchContainerComponent{
  countries: Country[] = [];
  countries$: Observable<Country[]> = this.countrySearchService.countries$;

  constructor(private countrySearchService: CountrySearchService) {}

  get name(): string {
    return this.countrySearchService.name;
  }

  get currency(): string {
    return this.countrySearchService.currency;
  }

  get language(): string {
    return this.countrySearchService.language;
  }

  get capital(): string {
    return this.countrySearchService.capital;
  }

  onNameChange(newName: string): void {
    this.countrySearchService.setName(newName);
  }

  onCurrencyChange(newCurrency: string): void {
    this.countrySearchService.setCurrency(newCurrency);
  }

  onLanguageChange(newLanguage: string): void {
    this.countrySearchService.setLanguage(newLanguage);
  }

  OnCapitalChange(newCapital: string): void {
    this.countrySearchService.setCapital(newCapital);
  }

  onSortOptionChange(newSortOption: string): void {
    this.countrySearchService.setSortOption(newSortOption);
  }
}
