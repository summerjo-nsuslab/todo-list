import { Data } from './data.js';

class Component {
    stateManager;
    listData;
    hostElement;
    template;
    setTemplate() {};
    setEventHandler() {};
    setChildren() {};

    constructor(hostElementId, manager, data) {
        this.stateManager = manager;
        this.listData = data;
        this.hostElement = document.getElementById(hostElementId);
        this.setTemplate();
        this.render();
        this.setEventHandler();
        this.setChildren();
    }

    render() {
        this.hostElement.innerHTML = this.template;
    }
}

export { Component };