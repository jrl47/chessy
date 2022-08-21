class Timer {
    constructor(interval) {
        this.tickCallbacks = [];
        this.ticks = 0;
        this.expected = -1;
        this.interval = interval;
        this.unpause();
    }
    addTickCallback(tickCallback) {
        this.tickCallbacks.push(tickCallback);
    }
    pause() {
        clearInterval(this.intervalId);
    } 
    unpause() {
        this.intervalId = setInterval(
            () => {
                // if (this.expected === -1) {
                //     this.expected = Date.now() + this.interval;
                // } else {
                //     let newExpected = Date.now() + this.interval;
                //     // console.log(newExpected - this.expected);
                //     if (newExpected - this.expected > this.interval + 5) {
                //         console.log('loop struggling!!!');
                //         // clearInterval(Timer.instance.intervalId);
                //     }
                //     this.expected = newExpected;
                // }
                this.callTickCallbacks();
            }
            , this.interval);
    }
    callTickCallbacks() {
        for (let i = 0; i < this.tickCallbacks.length; i++) {
            let remove = this.tickCallbacks[i].call();
            if (remove) {
                this.tickCallbacks.splice(i, 1);
            }
        }
        this.ticks++;
        // uncomment for a fixed end time
        // if (Timer.instance.ticks > 2000) {
        //     console.log('DONE!');
        //     clearInterval(Timer.instance.intervalId);
        // }
    }
}

export var timer = new Timer(200);