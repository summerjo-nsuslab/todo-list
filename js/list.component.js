import { Component } from './component.js';
import { ItemComponent } from './item.component.js';
import { Data } from './data.js';

class ListComponent extends Component {
    constructor() {
        super('todoBody');
        this.setList = '';
    }

    setTemplate() {
        this.template = `<ul id="todoList"></ul>`
    }

    setEventHandler() {
        const todoList = document.getElementById('todoList');

        todoList.addEventListener('click', (e) => {
            const $e = e.target

            let getElementIndex = (range) => {
                if(range) return [].indexOf.call(document.querySelectorAll('#todoList li'), range.parentElement);
            }

            if($e.className == 'btnModify'){
                if($e.innerText == '수정'){
                    $e.previousElementSibling.removeAttribute('disabled');
                    $e.innerText = '확인';
                }else{
                    new Data().put('title', $e.previousElementSibling.value, getElementIndex($e));
                    $e.previousElementSibling.setAttribute('disabled', 'disabled');
                    $e.innerText = '수정';
                }
            }else if($e.className == 'btnDelete'){
                new Data().delete(getElementIndex($e));
                $e.parentElement.remove();
            }else if($e.type == 'checkbox'){
                new Data().put('status', ($e.checked ? 'checked' : ''), getElementIndex($e));
            }
        });
    }

    setChildren() {
        new ItemComponent();
    }
}
export { ListComponent };

