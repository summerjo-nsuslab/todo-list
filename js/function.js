import {todoCont} from './elements.js';

class Component {
    hostElement;
    template;
    state;
    constructor(hostElementId) {
        this.hostElement = document.getElementById(hostElementId);

    }
    setState(state) {
        this.state = state;
    }
    render() {
        this.hostElement.innerHTML = this.template;
    }
}
class AppComponent {
    constructor() {
        super('todoWrap');
    }
}
class ListComponent extends Component {
    list;
    constructor() {
        super('list');
        this.state = dataProvider.getList();
    }
    setListItem() {
        this.list = this.data.map(d => {

        });
    }
    render() {
        this.template = `
        <ul>
        </ul>
        `;
        super.render();
    }
}

const list = new ListComponent();
list.render();

class Item {
    constructor(value){
        this.value = value;
    }

    render() {
        let html = todoCont;
        let li = document.createElement('li');
        let inputCheckbox = document.createElement('input');
        let inputText = document.createElement('input');
        let btnModify = document.createElement('button');
        let btnDelete = document.createElement('button');
        let btnModifyText = document.createTextNode('수정');
        let btnDeleteText = document.createTextNode('삭제');

        inputCheckbox.setAttribute('type', 'checkbox');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('disabled', 'disabled');
        inputText.setAttribute('value', this.value);
        btnModify.appendChild(btnModifyText);
        btnModify.addEventListener('click', modifyList);
        btnDelete.appendChild(btnDeleteText);
        btnDelete.addEventListener('click', this.deleteList);

        li.appendChild(inputCheckbox);
        li.appendChild(inputText);
        li.appendChild(btnModify);
        li.appendChild(btnDelete);
        html.appendChild(li);
    }
    deleteList() {
        this.parentElement.remove();
    }
}

let resiterList = () => {
    let inputValue = inputList.value;

    if (inputValue != '') {
        let newList = new Item(inputValue);

        newList.render();
        inputList.value = '';
    } else {
        alert('내용을 입력해주세요!');
    }
}

function deleteList() {
    this.parentElement.remove();
}

function modifyList() {
    if(this.innerText == '수정'){
        this.previousElementSibling.removeAttribute('disabled');
        this.previousElementSibling.focus();
        this.innerText = '확인'
    }else{
        this.previousElementSibling.setAttribute('disabled', 'disabled');
        this.innerText = '수정'
    }
}

export {Item, resiterList};