import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Game } from 'app/game';
import { GameService } from 'app/game.service';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.less']
})
export class GameSearchComponent implements OnInit {
  games$!: Observable<Game[]>;
  private searchTerms = new Subject<string>();
  constructor(private gameService: GameService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  searchStr='';
  ngOnInit(): void {
    /* this.games$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.gameService.searchGames(term)),
    ); */
  }

}
