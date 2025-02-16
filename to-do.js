let inputElement = document.querySelector('.inside-text')

let listBox = document.querySelector('.list-box');

 //this is the todoname that th user inputs


const todoList = [
  'make dinner',
  'wash dishes',
  'watch youtube'
];

renderTodolist()


function renderTodolist() {

      let todoListHtml = '';

      for (let i = 0; i < todoList.length; i++) {
         const todo = todoList[i];
         const html = `<p>${todo}</p>`;
         todoListHtml += html
      }
      listBox.innerHTML = todoListHtml;
}

function addTodo() {
   const name = inputElement.value;
   todoList.push(name);
   console.log(todoList);
   inputElement.value = '';

   renderTodolist()
}

