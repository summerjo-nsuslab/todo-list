import { Data } from './data.js';

class Component {
    //base class 전역 변수 선언
    hostElement;
    state = [];
    template = '';

    stateChangeCallback = [];
    setTemplate() {}
    setEventHandler() {}
    setChildren() {} //하위 class를 호출하여 DOM을 생성하기 위함

    addStateChanges(callback) {
        this.stateChangeCallback.push(callback);
        this.publishStateChanges();
    }

    publishStateChanges() {
        this.stateChangeCallback.forEach(callback => {
            //console.log(callback);
            callback;
        });
    }

    constructor(hostElementId) {
        this.state = [];
        this.hostElement = document.getElementById(hostElementId);
        this.setState();
        this.setTemplate();
        this.render();
        this.setEventHandler();
        this.setChildren();
    }

    setState(newState) {
        this.state = [...this.state, newState];
        console.log(this.state);
    }

    render() {
        this.hostElement.innerHTML = this.template;
    }
}

export { Component };