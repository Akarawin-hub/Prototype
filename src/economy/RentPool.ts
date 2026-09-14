export class RentPool{
    public amount:number = 0;
   
    constructor(){
    }
 
    public add(amount:number):void{
    this.amount += amount;
  }
 
  public collect():number{
    const collect = this.amount
        this.amount = 0;
    return collect;
  }
 
  public clear():void{
    this.amount = 0;
  }
}   