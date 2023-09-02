// const obj1 = {name : 'steve',age : 25 };
// const obj2 = {address : "australia",hobby : 'Cricket'};

// const obj3 = Object.assign({},obj1,obj2);

// console.log(obj3);

async function retriveData(){

const todosResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");

const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");

const todoPromise = todosResponse.json();

const todoDataObject = todoPromise.then((todoData)=> todoData);

todoDataObject.then((some)=>{console.log(some)});

}


retriveData();