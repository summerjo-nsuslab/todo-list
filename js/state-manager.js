export class StateManager {
    state;
    callbacks = [];

    constructor() {
        this.state = [];
    }

    setState(state) {
        this.state = [state];
    }

    subscribe(callback) {
        this.callbacks.push(callback);
    }

    publish() {
        this.callbacks.forEach(callback => {
            callback(this.state);
        })
    }
}