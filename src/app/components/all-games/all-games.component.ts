import { Component, OnInit } from '@angular/core';
import { GAMES } from 'app/mock-games';
import { GameService } from 'app/game.service';
import { Game } from 'app/game';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.less'],
})
export class AllGamesComponent implements OnInit {
  /* gamesCtrl = function ($scope: any) {
    $scope.games = GAMES;
  }; */
  //games = GAMES;
  games: Game[] = [];
  searchStr = '';
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getGames();
  }
  getGames(): void {
    this.gameService
      .getGames()
      .subscribe((games: Game[]) => (this.games = games));
  }
}
