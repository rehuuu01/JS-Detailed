let todoList = [];
displayToDoList();


function addToDo(){
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  todoList.push(todoItem);
  inputElement.value = '';

  displayToDoList();
}

function displayToDoList(){
  let displayElement = document.querySelector('#todo-items');
  displayElement.innerText = '';
  for (let i = 0; i < todoList.length; i++){
    displayElement.innerText = displayElement.innerText + todoList[i] + "\n";
  }
}