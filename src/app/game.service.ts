import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Game } from './game';
import { GAMES } from './mock-games';


@Injectable({
  providedIn: 'root',
})
export class GameService {

  constructor() { }

  getGames(): Observable<Game[]> {
    const games = of(GAMES);
    return games;
  }
  /* searchGames(term: string): Observable<Game[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Game[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  } */
}