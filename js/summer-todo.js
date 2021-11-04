import { Data } from './data.js';
import { StateManager } from './state-manager.js';
import { AppComponent } from './app.component.js';


export class SummerTodo {
    constructor() {
        this.listData = new Data();
        this.stateManager = new StateManager();
    }

    async start() {
        await this.listData.get();
        new AppComponent(this.stateManager, this.listData);
    }
}