import { Player } from "../models/Player";
import { Property } from "../models/Property";

export class TakeOver {

    private takeOverLimit = 1

    calculateCost(property: Property): number{
        return property.getPrice() * 1.65
    }
    
    takeOver(player: Player, property: Property): boolean {
        if (property.getOwner() !== null && property.getOwner() !== player && player.TakeOverCount < this.takeOverLimit && player.money >= this.calculateCost(property)) {
            player.pay(this.calculateCost(property))
            property.setOwner(player)
            player.TakeOverCount += 1
            return true
        } else {
            return false
        }
    }
}
