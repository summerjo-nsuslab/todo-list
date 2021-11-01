import { Component } from './component.js';
import { Data } from './data.js';

class ItemComponent extends Component {
    constructor() {
        super('todoList');
    }

    // setState() {
    //     this.newState = new Data().list;
    //     super.setState(this.newState);
    // }

    setState() {
        if(localStorage.getItem('localList') != null) {
            this.newState = new Data();
            // this.newState.get().then(() => {
                this.list = (JSON.parse(localStorage.getItem('localList')));
                super.setState(this.list);
            // });
        }else{
            this.list = [];
        }
    }

    setTemplate() {
        for (const item of this.list) {
            this.template += `<li><input type="checkbox" ${item.status}><input type="text" value="${item.title}" disabled><button class="btnModify">수정</button><button class="btnDelete">삭제</button></li>`
        }
    }
}

export { ItemComponent };

