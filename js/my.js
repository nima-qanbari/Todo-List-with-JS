const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");
const filteredOption = document.querySelector(".filter-todos");




todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodo);
filteredOption.addEventListener("click", filterTodos);
document.addEventListener("DOMContentLoaded" , getLocalTodos )


function addTodo(e) {
    e.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = `<li>${todoInput.value}</li>
    <span><i class="fa fa-check-square"></i></span>
    <span><i class="fa fa-trash"></i></span>`;
    if (todoInput.value === "") {
        alert("type somethinge")
    }
    else {
        todoDiv.innerHTML = newTodo;
        todoList.appendChild(todoDiv);
        saveLocalTodos(todoInput.value);
        todoInput.value = "";
    }
}


function removeTodo(e) {
    const classList = [...e.target.classList];
    const item = e.target;
    if (classList[1] === "fa-check-square") {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed");
    }

    else if (classList[1] === "fa-trash") {
        const todo = item.parentElement.parentElement;
        removeLacalTodos(todo);
        todo.remove();

    }


}

function filterTodos(e) {
    const todos = [...todoList.childNodes];
    todos.forEach((todo) => {

        switch (e.target.value) {
            case "works":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                }
                else {
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                }
                else {
                    todo.style.display = "none"
                }
                break;

        }

    })
}

function saveLocalTodos(b) {
    let saveTodos = localStorage.getItem('a') ?
    JSON.parse(localStorage.getItem("a")) : [];

    saveTodos.push(b);
    localStorage.setItem("a" , JSON.stringify(saveTodos));
}

function getLocalTodos(){
    let saveTodos = localStorage.getItem('a') ?
    JSON.parse(localStorage.getItem("a")) : [];

    saveTodos.forEach( b =>{
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo = `<li>${b}</li>
        <span><i class="fa fa-check-square"></i></span>
        <span><i class="fa fa-trash"></i></span>`;
        todoDiv.innerHTML = newTodo;
        todoList.appendChild(todoDiv);

    })
}


function removeLacalTodos(b){
    let saveTodos = localStorage.getItem('a') ?
    JSON.parse(localStorage.getItem("a")) : [];
   const filteredTodos = saveTodos.filter(t =>  t !== b.children[0].innerText);
   localStorage.setItem("a", JSON.stringify(filteredTodos))

}











