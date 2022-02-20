import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { GamesComponent } from './components/games/games.component';
import { LibraryComponent } from './components/library/library.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'games' },
  { path: 'login', component: LogInComponent },
  { path: 'games', component: GamesComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }