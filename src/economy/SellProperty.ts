import { Property } from "../Property";
import { Player } from "../Player";
export class SellProperty{

    public sortPropertyPrice(properties:Property[]):Property[]{
        return [...properties].sort((propertyA , propertyB) => propertyA.getPrice()- propertyB.getPrice());
    }

    public calculateSellValue(price:number):number{
        return price * 0.20;
    }
    public confrimSell(player:Player , property:Property):boolean{
        if (property.getOwner() !== player){
            return false;
        }
        player.receive(this.calculateSellValue(property.getPrice()))
        
        player.removeProperty(property);
        property.setOwner(null);

        property.clearRentPool();
        return true;
    }
}
