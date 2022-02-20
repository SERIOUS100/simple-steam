import { Pipe, PipeTransform } from "@angular/core";
import { GAMES } from "./mock-games";
import { Game } from "./game";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform{
    transform(games: Game[], value: string) {
        return games.filter(game => {
            return game.name.includes(value);   
        })
    }
}