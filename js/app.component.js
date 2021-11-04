import { Component } from './component.js';
import { InputComponent } from './input.component.js';
import { ListComponent } from './list.component.js';

class AppComponent extends Component {
    constructor(manager, data) {
        super('todoWrap', manager, data);
    }

    setTemplate() {
        this.template = `<h1>TO DO LIST</h1><section id="todoHeader"></section><section id="todoBody"></section>`
    }

    setChildren() {
        new InputComponent(this.stateManager, this.listData);
        new ListComponent(this.stateManager, this.listData);
    }
}

export { AppComponent };