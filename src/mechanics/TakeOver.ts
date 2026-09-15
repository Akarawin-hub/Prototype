import { Property } from "../models/Property";
import { Player } from "../models/Player";

export class TakeOver {
    calculateCost(property: Property): number{
        return property.price * 1.65
    }
    takeOver(player: Player, property: Property): boolean {
        if (property.owner !== null && property.owner.name !== player.name && player.TakeOverCount == 0 && player.money >= this.calculateCost(property)) {
            player.pay(this.calculateCost(property))
            property.setOwner(player)
            player.TakeOverCount += 1
            return true
        } else {
            return false
        }
    }
}
