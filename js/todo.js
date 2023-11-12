const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoCountSpan = document.getElementById("todo-count");
const todoListSpan = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let todos = [];
console.log(todos.length);



function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
    let todo_count = todos.length;
    document.getElementById("todo-count").innerText = `You have ${todo_count} todos!`;
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "✖️";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    todoListSpan.appendChild(li);
    let todo_count = todos.length;
    document.getElementById("todo-count").innerText = `You have ${todo_count} todos!`;
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}