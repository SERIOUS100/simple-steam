import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Game } from 'app/game';
import { GameService } from 'app/game.service';
import { SearchPipe } from 'app/search.pipe';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.less'],
})
export class GameSearchComponent implements OnInit {
  searchStr = '';
  search(value: string) {
    return value;
  }
  ngOnInit(): void {}
}
