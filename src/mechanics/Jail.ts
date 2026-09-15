import { Player } from "../models/Player";

export class Jail {
    public Position = 12

    onTheTile(player:Player){
        if (player.position = this.Position) {
            player.inJail = true
        }
    }

    bribe(player: Player): boolean{
        if (player.money >= 500) {
            player.pay(500)
            player.inJail = false
            return true
        } else {
            return false
        }
    }

    skip(player: Player): void{
        player.inJail = false
//        (`${player.name} is in jail skip 1 turn`)
    }
}