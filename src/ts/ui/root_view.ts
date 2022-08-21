import {View} from 'ts/ui/abstract/view';
import {boardView} from 'ts/ui/board_view';
class RootView extends View {
    right: View;

    constructor() {
        super('div');
        this.view.id = 'root-view';
    }

    initialize() {
        document.body.appendChild(this.view);

        // this.right = new View('div');
        // this.right.view.id = 'rv-right';
        // this.right.addChild(boardView);
        
        // this.addChild(this.right);
        this.addChild(boardView);
    }
}

export var rootView = new RootView();