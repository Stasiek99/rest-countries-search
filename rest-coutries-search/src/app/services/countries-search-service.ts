// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { BehaviorSubject, combineLatest, map, Observable, of, switchMap } from "rxjs";
//
// import { Country } from "../types/country";
//
// @Injectable({
//   providedIn: "root",
// })
// export class CountrySearchService {
//   private countriesSource$: Observable<Country[]> = new Observable<Country[]>();
//   countries$: Observable<Country[]> =new Observable<Country[]>();
//   private nameSubject = new BehaviorSubject<string>("");
//   private currenciesSubject = new BehaviorSubject<string>("");
//   private languagesSubject = new BehaviorSubject<string>("");
//   private capitalSubject = new BehaviorSubject<string>("");
//   private sortOptionSubject = new BehaviorSubject<string>("");
//   private apiBaseUrl = "http://restcountries.com/v3.1/";
//
//   constructor(private http: HttpClient) {
//     this.countriesSource$ = combineLatest([
//       this.nameSubject,
//       this.currenciesSubject,
//       this.languagesSubject,
//       this.capitalSubject
//     ]).pipe(
//       switchMap(([name, currency, language, capital]) => {
//         if (name) {
//           return this.http.get<Country[]>(`${this.apiBaseUrl}/${name}`).pipe(
//             map((countries) => countries || [])
//           );
//         } else if (currency) {
//           return this.http.get<Country[]>(`${this.apiBaseUrl}/${currency}`).pipe(
//             map((countries) => countries || [])
//           );
//         } else if (language) {
//           return this.http.get<Country[]>(`${this.apiBaseUrl}/${language}`).pipe(
//             map((countries) => countries || [])
//           );
//         } else if (capital) {
//           return this.http.get<Country[]>(`${this.apiBaseUrl}/${currency}`).pipe(
//             map((countries) => countries || [])
//           )
//         } else {
//             return of([]);
//         }
//       })
//     );
//
//     this.countries$ = combineLatest([
//       this.countriesSource$,
//       this.sortOptionSubject
//     ]).pipe(
//       map(([countries, sortOption]) => this.sortCountries(countries, sortOption))
//     );
//   }
//
//   setName(name: string): void {
//     this.nameSubject.next(name);
//     this.clearOtherFilters("name");
//   }
//
//   setCurrency(currency: string): void {
//     this.currenciesSubject.next(currency);
//     this.clearOtherFilters("currency");
//   }
//
//   setLanguage(language: string): void {
//     this.languagesSubject.next(language);
//     this.clearOtherFilters("language");
//   }
//
//   setCapital(capital: string): void {
//     this.capitalSubject.next(capital);
//     this.clearOtherFilters("capital");
//   }
//
//   setSortOption(sortOption: string): void {
//     this.sortOptionSubject.next(sortOption);
//   }
//
//   get name(): string {
//     return this.nameSubject.value;
//   }
//
//   get currency(): string {
//     return this.currenciesSubject.value;
//   }
//
//   get language(): string {
//     return this.languagesSubject.value;
//   }
//
//   get capital(): string {
//     return this.capitalSubject.value;
//   }
//
//   get sortOption(): string {
//     return this.sortOptionSubject.value;
//   }
//
//   private clearOtherFilters(except: string): void {
//     if (except !== "name") {
//       this.nameSubject.next("");
//     }
//     if (except !== "currency") {
//       this.currenciesSubject.next("");
//     }
//     if (except !== "language") {
//       this.languagesSubject.next("");
//     }
//     if (except !== "capital") {
//       this.capitalSubject.next("");
//     }
//   }
//
//   private sortCountries(countries: Country[], sortOption: string): Country[] {
//     return [...countries].sort((a, b) => {
//       if (sortOption === "name") {
//         return a.name.localeCompare(b.name);
//       } else if (sortOption === "population") {
//         return null;
//         // a.population - b.population
//       }
//       return 0;
//     });
//   }
// }
