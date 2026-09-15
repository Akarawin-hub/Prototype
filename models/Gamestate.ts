import type { Player } from "./Player";
import type { Turn } from "./Turn";

export class GameState {
  players: Player[];
  currentPlayer: Player | null;
  turn: Turn | null;
  gameStatus: string;

  constructor() {
    this.players = [];
    this.currentPlayer = null;
    this.turn = null;
    this.gameStatus = "waiting";
  }
}