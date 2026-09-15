export class Money {
    public amount:number;
    constructor(amount:number){
        this.amount = amount;
    }
    public add(amount:number): void{
        if (amount <= 0){
            console.log("Must be positive number");
        }
        this.amount += amount;
    }
    public subtract(amount:number):boolean {
        if (amount <= 0){
            console.log("Must be positive number");
        }
       if (this.amount >= amount){
            this.amount -= amount;
            return true;
       }
       return false;
    }
}