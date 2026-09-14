export class Money {
    public amount:number;
    constructor(amount:number){
        this.amount = amount;
    }
    public add(amount:number): void{
        this.amount += amount;
    }
    public subtract(amount:number):boolean {
       if (this.amount >= amount){
            this.amount -= amount;
            return true;
       }
       return false;
    }
}