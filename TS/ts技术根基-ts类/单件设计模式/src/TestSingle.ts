let localStorageObj = {name:'LI',age:18};

localStorage.setItem('info',JSON.stringify(localStorageObj));

let info = localStorage.getItem('info');

 info !=null? JSON.parse(info) :null