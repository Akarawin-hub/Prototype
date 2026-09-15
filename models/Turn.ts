import type { Player } from "./Player";
import type { Dice } from "./Dice";

export class Turn {
  player: Player | null;
  dice: Dice;
  diceResult: number;

  constructor(dice: Dice) {
    this.player = null;
    this.dice = dice;
    this.diceResult = 0;
  }
}