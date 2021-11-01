import { Component } from './component.js';
import { InputComponent } from './input.component.js';
import { ListComponent } from './list.component.js';

class AppComponent extends Component {
    constructor() {
        super('todoWrap');
    }

    setTemplate() {
        this.template = `<h1>TO DO LIST</h1><section id="todoHeader"></section><section id="todoBody"></section>`
    }

    setChildren() {
        new InputComponent();
        new ListComponent();
    }
}

export { AppComponent };