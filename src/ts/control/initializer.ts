import {game} from 'ts/state/game';
import {rootView} from 'ts/ui/root_view';
import {timer} from 'ts/util/timer';

class Initializer {
	constructor() {}
	
	initialize() {
		rootView.initialize();
		timer.addTickCallback(() => {game.doTurn();});
	}
}

export var initializer = new Initializer();