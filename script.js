const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter');

// EVENT LISTENERS

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// FUNCTIONS

function addTodo(event) {
    event.preventDefault();
    
    // TO DO DIV
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    // CREATE LIST
    
    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value;
    todoLi.classList.add('todoLi');
    todoDiv.appendChild(todoLi);

    // PREVENT BLANK LIST

    if(todoInput.value.trim() === "") {
        return alert('Empty list!');
    }
    
    // CHECK BUTTON
    
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton);
    
    // DELETE BUTTON
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('delete-btn')
    todoDiv.appendChild(deleteButton);
    
    // APPEND TO LIST
    
    todoList.append(todoDiv);
    
     todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    
    // DELETE TO DO
    
    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        
        // ANIMATION
        
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }
    
    // CHECK TO DO
    
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        
    }
    
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) { 
        const mStyle = todo.style;  
        if(mStyle != undefined && mStyle != null){
            switch (e.target.value) {
                case "all":
                mStyle.display = "flex";
                break;
                case "completed":
                if (todo.classList.contains('completed')) {
                    mStyle.display = 'flex';
                } else {
                    mStyle.display = "none";
                }
                break;
                case "uncompleted":
                if (todo.classList.contains('completed')){
                    mStyle.display = 'none';
                }
                else{
                    mStyle.display = "flex";
                }
                break;
            }
        }
    })
}