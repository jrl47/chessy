import {Chess} from 'chess.js'
import {boardView} from 'ts/ui/board_view';
class Game {
    chess;

    constructor() {
        this.chess = new Chess();
        console.log(this.chess.pgn());
        boardView.setPosition(this.chess.fen());
    }

    doTurn() {
        if (this.chess.game_over()) { console.log('GAME OVER'); return; }
        let nextMoves = this.chess.moves();
        let nextMove = nextMoves[Math.floor(Math.random() * nextMoves.length)];
        this.chess.move(nextMove)
        boardView.setPosition(this.chess.fen());
    }
}

export var game = new Game();