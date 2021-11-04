import { Component } from './component.js';
import { Data } from './data.js';
import { ItemComponent } from './item.component.js';

class ListComponent extends Component {
    constructor(manager, data) {
        super('todoBody', manager, data);
    }

    setTemplate() {
        this.template = `<ul id="todoList"></ul>`
    }

    setEventHandler() {
        const todoList = document.getElementById('todoList');

        todoList.addEventListener('click', (e) => {
            const $e = e.target;

            let getElementIndex = (range) => {
                return [].indexOf.call(document.querySelectorAll('#todoList li'), range.parentElement);
            }

            if($e.className == 'btnModify'){
                if($e.innerText == '수정'){
                    $e.previousElementSibling.removeAttribute('disabled');
                    $e.innerText = '확인';
                }else{
                    this.listData.put('title', $e.previousElementSibling.value, getElementIndex($e));
                    $e.previousElementSibling.setAttribute('disabled', 'disabled');
                    $e.innerText = '수정';
                }
            }else if($e.className == 'btnDelete'){
                this.listData.delete(getElementIndex($e));
                $e.parentElement.remove();
            }else if($e.type == 'checkbox'){
                this.listData.put('status', ($e.checked ? 'checked' : ''), getElementIndex($e));
            }
        });
    }

    setChildren() {
        new ItemComponent(this.stateManager, this.listData);
    }
}
export { ListComponent };

