import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiResult {
  count: number
  next: string
  previous: any
  results: Pokemon[]
}

export interface Pokemon {
  name: string
  url: string
}

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ApiService {

  url = 'https://pokeapi.co/api/v2/pokemon'

  constructor(
   private http : HttpClient
  ) {}

  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<ApiResult>(this.url)
            .pipe(
              map( e => e.results )
            )
  }

}
