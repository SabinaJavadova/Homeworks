const todos = JSON.parse(localStorage.getItem('todos')) || [];
const added = document.querySelector(".added");
const add = document.querySelector(".add");
const inputodo = document.querySelector(".todo");
const all = document.querySelector(".all");
const completed = document.querySelector(".completed");
const pending = document.querySelector(".pending");
const clear = document.querySelector(".clear");
const modal = document.querySelector(".modal-bg");
const cleard = document.querySelector(".cleard");
const cancel = document.querySelector(".cancel");
const edit = document.querySelector(".edit-bg");
const cedit = document.querySelector(".cancel-edit");
const save = document.querySelector(".save");
const countDisplay = document.querySelector(".count");

let current = null;

function updateCount() {
    countDisplay.textContent = `You have ${todos.filter(todo => !todo.completed).length} pending todos`;
}

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    added.innerHTML = ''; 
    todos.forEach((todo, index) => {
        const todorow = document.createElement("div");
        todorow.classList.add("block");
        todorow.innerHTML = `
            <input type="checkbox" class="scales" ${todo.completed ? 'checked' : ''} />
            <h2>${todo.text}</h2>
            <div class="icons">
                <i class="fa-solid fa-trash delete"></i>
                <i class="fa-regular fa-pen-to-square edit"></i>
            </div>
        `;
        added.appendChild(todorow);

        const checkbox = todorow.querySelector(".scales");
        const checktext = todorow.querySelector(".block h2");

       
        checkbox.addEventListener("click", function () {
            todo.completed = checkbox.checked;  
            checktext.style.textDecoration = checkbox.checked ? "line-through" : "none";  
            saveToLocalStorage(); 
            updateCount(); 
        });

        const deletee = todorow.querySelector(".delete");
        const editt = todorow.querySelector(".edit");

    
        deletee.addEventListener("click", function () {
            todos.splice(index, 1);
            renderTodos(); 
            saveToLocalStorage();  
            updateCount();
        });

    
        editt.addEventListener("click", function () {
            edit.style.display = "flex";
            const editing = document.querySelector(".editing");
            editing.value = todo.text; 
            current = todo; 
        });
    });
}

function addingg() {
    const todoText = inputodo.value.trim();
    if (todoText === "") return;

    todos.push({ text: todoText, completed: false });

    saveToLocalStorage();  
    renderTodos();       
    inputodo.value = "";   
    updateCount();       
}


save.addEventListener("click", function () {
    const editing = document.querySelector(".editing");
    const edited = editing.value.trim();
    current.text = edited; 

    edit.style.display = "none";
    renderTodos();  
    saveToLocalStorage();  
    updateCount();  
});
completed.addEventListener("click", function () {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        const checkbox = block.querySelector(".scales");

        if (!checkbox.checked) {
            block.style.display = "none";  
        } else {
            block.style.display = "flex";
        }
    });
});


all.addEventListener("click", function () {
    renderTodos();  
});

pending.addEventListener("click", function () {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        const checkbox = block.querySelector(".scales");

        if (!checkbox.checked) {
            block.style.display = "flex";
        } else {
            block.style.display = "none";  
        }
    });
});


clear.addEventListener("click", function () {
    modal.style.display = "flex";  
});


cleard.addEventListener("click", function () {
    modal.style.display = "none"; 
    todos.length = 0;  
    renderTodos();  
    saveToLocalStorage();  
    updateCount(); 
});


cancel.addEventListener("click", function () {
    modal.style.display = "none";  
});

cedit.addEventListener("click", function () {
    edit.style.display = "none"; 
});


add.addEventListener("click", addingg);


inputodo.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addingg();
    }
});

renderTodos();
