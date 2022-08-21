import {chess} from 'ts/state/game';
import {boardView} from 'ts/ui/board_view';
export class Engine {
    isWhite;

    constructor(isWhite) {
        this.isWhite = isWhite;
    }

    chooseMove() {
        let board = chess.board();
        // console.log(board);
        let nextMoves = chess.moves();
        return nextMoves[Math.floor(Math.random() * nextMoves.length)];
    }

    getPieces(includeWhite, includeBlack) {
        let pieces = [];
        // TODO use util method
    }
}