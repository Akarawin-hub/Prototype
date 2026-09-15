import { Player } from "../models/Player";


export class Chance {
    onTile(player:Player,){
        if (player.position = 6 | 18 | 24 | 30) {
            
        }
    }
    chanceDraw(player:Player):ChanceEvent{
        const Draw = Math.random() * 100
        if (Draw < 21) {
            player.move(5)
            return "MOVE_FORWARD_5"
        } else if (20 < Draw && Draw < 36) {
            player.receive(100)
            return "MONEY_PLUS_100"
        } else if (35 < Draw && Draw < 56) {
            player.pay(350)
            return "MONEY_MINUS_350"
        } else if (55 < Draw && Draw < 76) {

            return "DICE_X2"
        } else if (75 < Draw && Draw < 86) {
            player.receive(300)
            return "LOTTERY_PLUS_300"
        } else {
            player.move(-3)
            return "MOVE_BACKWARD_3"
        }
    }
}

export type ChanceEvent =
    | "MOVE_FORWARD_5"
    | "MONEY_PLUS_100"
    | "MONEY_MINUS_350"
    | "DICE_X2"
    | "LOTTERY_PLUS_300"
    | "MOVE_BACKWARD_3"
