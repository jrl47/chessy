import {View} from 'ts/ui/abstract/view';
class BoardView extends View {
    constructor() {
        super('chess-board');
        this.view.id = 'board-view';
        this.view.style.width = '800px';
        this.view.setAttribute('draggable-pieces', '') // sets to true
        this.view.setAttribute('position', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')
    }

    setPosition(position) {
        this.view.setAttribute('position', position)
    }
}

export var boardView = new BoardView();