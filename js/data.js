class Data {
    list;

    constructor() {
        this.list = [];
    }

    get() {
    //조회
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(localStorage.getItem('localList'));
            }, 500);
        }).then((result) => {
            return this.list = (result != null) ? JSON.parse(result) : [];
        })
    }

    put(key, item, index) {
    //수정
        return new Promise((resolve) => {
            let changedItem = [...this.list];
            if (key == 'title'){
                changedItem[index].title = item;
            }else {
                changedItem[index].status = item;
            }
            resolve(this.run(changedItem));
        });
    }

    post(item) {
    //등록
        return new Promise((resolve) => {
            let changedItem = (this.list != null) ? [...this.list, item] : [item];
            resolve(this.run(changedItem));
        })
    }

    delete(index) {
    //삭제
        return new Promise((resolve) => {
            let changedItem = [...this.list];
            changedItem.splice(index, 1);
            resolve(this.run(changedItem));
        });
    }

    run(setLocalList) {
        localStorage.setItem('localList', JSON.stringify(setLocalList));
        return this.list = JSON.parse(localStorage.getItem('localList'));
    }
}

export { Data };