import { Property } from "../Property";
export class Rent {
    public amount:number;
   
    constructor(property:Property){
       this.amount = property.getRent();
    }
}