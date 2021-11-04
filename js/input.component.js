import { Component } from './component.js';
import { ItemComponent } from './item.component.js';
import { Data } from './data.js';

class InputComponent extends Component {
    constructor(manager, data) {
        super('todoHeader', manager, data);
    }

    setTemplate() {
        this.template = `<input type="text" id="inputItem"><button id="btnRegister">등록</button>`;
    }

    setEventHandler() {
        document.getElementById('btnRegister').addEventListener('click', () => {
            let inputItem = document.getElementById('inputItem');

            if (!inputItem.value) {
                alert('내용을 입력해주세요.');
                return;
            }
            let inputValue = {title : inputItem.value, status : '' };
            this.listData.post(inputValue);
            this.stateManager.setState(inputValue);
            this.stateManager.publish();
            inputItem.value = '';
        });
    }
}

export { InputComponent };