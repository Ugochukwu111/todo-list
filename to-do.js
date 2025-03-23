let inputElement = document.querySelector('.inside-text');
const dateEl = document.querySelector('.js-due-date-input');
let todoDefaultText = document.querySelector('.defalt-added-todo-text');
let listBox = document.querySelector('.list-box');

 //this is the todoname that th user inputs


const todoList = [
  // {
  //  name:'wash dishes before dinner',
  // duedate: '2022-11-22',
  // },
  // {
  //  name:'make dinner',
  // duedate: '2022-12-22',
  // }
];

// renderTodolist()



function renderTodolist() {

      let todoListHtml = '';

      for (let i = 0; i < todoList.length; i++) {
         const todoObject = todoList[i];
         //const name = todoObject.name;
         // const duedate = todoObject.duedate;
         const {name, duedate} = todoObject;
         
         const html = `
          
         <p class ="undo-todo">
         <input type="checkbox">
         ${name} ${duedate}
           <button class = "delete-btn" onclick ="
         todoList.splice(${i}, 1);
         renderTodolist();
         ">
           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="red"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
         </button>
         </p>
       
         `;
         todoListHtml += html
      }
      listBox.innerHTML = todoListHtml;
}

function addTodo() {
    const duedate = dateEl.value;
     const name = inputElement.value;

     if (dateEl.value === '' || inputElement.value ==='' ){
      alert('Please input todo name and date!')
      return 
     }
   todoList.push({
    name,
    duedate
  }
   );
   inputElement.value = '';

   renderTodolist()
}

setInterval(()=>{
  if (todoList.length === 0){
    let defaultState = document.querySelector('.list-box')
    defaultState.innerHTML = '<h4> NO TODO ADDED YET </h4>'
  }
}, 2000)