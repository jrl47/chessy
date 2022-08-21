import {Chess} from 'chess.js'
import {boardView} from 'ts/ui/board_view';
import {Engine} from 'ts/engine/engine';
export var chess = new Chess();

class Game {
    isWhiteTurn;
    whiteEngine;
    blackEngine;

    constructor() {
        // this.chess = new Chess();
        // console.log(this.chess.pgn());
        // boardView.setPosition(this.chess.fen());
        // console.log(chess.pgn());
        boardView.setPosition(chess.fen());
        // console.log(chess.pgn());
        this.isWhiteTurn = true;
        this.whiteEngine = new Engine(true);
        this.blackEngine = new Engine(false);
    }

    doTurn() {
        if (chess.game_over()) { console.log('GAME OVER'); return; }
        if (this.isWhiteTurn) {
            chess.move(this.whiteEngine.chooseMove());
        } else {
            chess.move(this.blackEngine.chooseMove());
        }
        this.isWhiteTurn = !this.isWhiteTurn;
        boardView.setPosition(chess.fen());
        // let nextMoves = chess.moves();
        // let nextMove = nextMoves[Math.floor(Math.random() * nextMoves.length)];
        // chess.move(nextMove)
        // boardView.setPosition(chess.fen());
    }

    // doTurn() {
    //     if (this.chess.game_over()) { console.log('GAME OVER'); return; }
    //     let nextMoves = this.chess.moves();
    //     let nextMove = nextMoves[Math.floor(Math.random() * nextMoves.length)];
    //     this.chess.move(nextMove)
    //     boardView.setPosition(this.chess.fen());
    // }
}

export var game = new Game();