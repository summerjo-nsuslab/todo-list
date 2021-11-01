class Data {
    //list;

    constructor() {
        this.getList = localStorage.getItem('localList');
    }

    get() {
    //조회 - 못 했음
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    put(key, item, index) {
    //수정
        return new Promise((resolve) => {
            let changedItem = [...JSON.parse(this.getList)];
            if (key == 'title'){
                changedItem[index].title = item;
            }else {
                changedItem[index].status = item;
            }
            resolve(localStorage.setItem('localList', JSON.stringify(changedItem)));
        });
    }

    post(item) {
    //등록
        return new Promise((resolve) => {
            let changedItem = this.getList != null ? [...JSON.parse(this.getList), item] : [item];
            resolve(localStorage.setItem('localList', JSON.stringify(changedItem)));
        });
    }

    delete(index) {
    //삭제
        return new Promise((resolve) => {
            let changedItem = [...JSON.parse(this.getList)];
            changedItem.splice(index, 1);
            resolve(localStorage.setItem('localList', JSON.stringify(changedItem)));
        });
    }
}

export { Data };