import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesSearchContainerComponent } from './containers/countries-search-container/countries-search-container.component';
import { SearchTitleComponent } from './components/search-title/search-title.component';
import { NameFieldComponent } from './components/name-field/name-field.component';
import { FilterPropertySelectComponent } from './components/filter-property-select/filter-property-select.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { SortSelectComponent } from './components/sort-select/sort-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesSearchContainerComponent,
    SearchTitleComponent,
    NameFieldComponent,
    FilterPropertySelectComponent,
    CountriesListComponent,
    SortSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
