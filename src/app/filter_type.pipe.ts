import { Pipe, PipeTransform } from "@angular/core";
import { Game } from "./game";

@Pipe({
    name: 'filter_type'
})
export class FilterType implements PipeTransform{
    transform(games: Game[], value: string) {
        return games.filter(game => {
            return game.game_type.includes(value);   
        })
    }
}