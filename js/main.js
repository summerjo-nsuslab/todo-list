let btnResister = document.getElementById('btnResister');
let todoContList = document.querySelector('.todoCont > ul');


btnResister.addEventListener('click', function(e){
  let newTodo = document.getElementById('inputList');

  if(newTodo.value != '') {
    let todoElem = document.createElement('li');
    todoElem.innerHTML = "<input type=\"checkbox\"><p>" + newTodo.value + "</p><button type=\"button\" class=\"btnDelete\">삭제</button>"
    todoContList.append(todoElem);
    newTodo.value = '';
    setBtnDelete();
  }else{
    alert('내용을 입력해주세요.');
  }
})

function setBtnDelete(){
  let btnDelete = document.querySelectorAll('.btnDelete');

  for (item of btnDelete){
    item.addEventListener('click', function(){
      this.parentElement.remove();
    })
  }
}

setBtnDelete();
