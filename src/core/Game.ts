import { GameState } from "../models/Gamestate";
import { Turn } from "../models/Turn";
import { Dice } from "../models/Dice";
import { Board } from "../models/Board";
import type { Player } from "../models/Player";

export class Game {
  private state: GameState;
  private board: Board;
  private dice: Dice;

  constructor() {
    this.state = new GameState();
    this.board = new Board();
    this.dice = new Dice();
  }

  startGame(players: Player[]): void {
    this.state.players = players;
    this.state.currentPlayer = players[0] ?? null;
    this.state.gameStatus = "playing";
  }

  startTurn(): void {
    if (this.state.currentPlayer === null) {
      return;
    }

    const turn = new Turn(this.dice);
    turn.player = this.state.currentPlayer;
    this.state.turn = turn;
  }

  rollDice(): number {
    if (this.state.turn === null) {
      return 0;
    }

    const result = this.state.turn.dice.roll();
    this.state.turn.diceResult = result;

    return result;
  }

  nextPlayer(): void {
    if (this.state.players.length === 0) {
      return;
    }

    const currentIndex = this.state.currentPlayer
      ? this.state.players.indexOf(this.state.currentPlayer)
      : -1;

    const nextIndex =
      (currentIndex + 1) % this.state.players.length;

    this.state.currentPlayer = this.state.players[nextIndex];
    this.state.turn = null;
  }
}