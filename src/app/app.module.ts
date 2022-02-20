import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { MenuService } from './services/menu.service';
import { GamesComponent } from './components/games/games.component';
import { LibraryComponent } from './components/library/library.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    GamesComponent,
    LibraryComponent,
    FriendsComponent,
    ProfileComponent,
    GameCardComponent,
    GameSearchComponent,
    AllGamesComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
