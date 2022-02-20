import { Component } from '@angular/core';
import { AppMenuItems } from './app.menu';
import { MenuService } from './services/menu.service';
import { AllGamesComponent } from './components/all-games/all-games.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  /* constructor( private menuService: MenuService){
    menuService.items = AppMenuItems;
  } */
  title = 'simple-steam';
}
