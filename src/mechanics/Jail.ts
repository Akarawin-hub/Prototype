import { Player } from "../models/Player";

export class Jail {
    onTheTile(player:Player){
        if (player.position == 12) {
            player.inJail = true
        }
    }
    bribe(player: Player): boolean{
        if (player.money <= 500) {
            player.pay(500)
            player.inJail = false
            return true
        } else {
            return false
        }
    }
    skip(player: Player): void{
        player.inJail = false
//        (`${player.getName} is in jail skip 1 turn`)
    }
}