import { Component } from './component.js';
import { ItemComponent } from './item.component.js';
import { Data } from './data.js';

class InputComponent extends Component {
    constructor() {
        super('todoHeader');
    }

    setTemplate() {
        this.template = `<input type="text" id="inputList"><button id="btnRegister">등록</button>`;
    }

    setEventHandler() {
        document.getElementById('btnRegister').addEventListener('click', () => {
            let inputList = document.getElementById('inputList');

            if (inputList.value != '') {
                new Data().post({title : inputList.value, status : '' });
                this.addStateChanges(new ItemComponent());
                inputList.value = '';
            }else{
                alert('내용을 입력해주세요.');
            }
        });
    }
}

export { InputComponent };