import { Component } from './component.js';

class ItemComponent extends Component {
    constructor(manager, data) {
        super('todoList', manager, data);
        this.stateManager.subscribe(this.onStateChanged);
    }

    setTemplate(list = this.listData.list) {
        this.template = '';
        for (const item of list) {
            this.template += `<li><input type="checkbox" ${item.status}><input type="text" value="${item.title}" disabled><button class="btnModify">수정</button><button class="btnDelete">삭제</button></li>`
        }
    }

    onStateChanged = (state) => {
        this.setTemplate(state);
        this.hostElement.insertAdjacentHTML('beforeend', this.template);
    }
}

export { ItemComponent };