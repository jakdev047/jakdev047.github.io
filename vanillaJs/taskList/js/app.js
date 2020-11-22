// define UI element
const form = document.querySelector('#task_form');
const taskInput = document.querySelector('#new_task');
const filter = document.querySelector('#task_filter');
const taskList = document.querySelector('ul#tasks');
const clearBtn = document.querySelector('#clear_task-btn');

// define event listener
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);

// define functions
function addTask(e) {
    e.preventDefault();
    // empty input check
    if (taskInput.value === "") {
        alert('add a Task!');
    } else {
        // create li element 
        let li = document.createElement('li');
        // create text 
        let liText = document.createTextNode(taskInput.value + " ");
        // create delete
        let taskDelete = document.createElement('a');
        taskDelete.setAttribute('href', '#');
        taskDelete.appendChild(document.createTextNode('X'));
        // text inset in li
        li.appendChild(liText);
        li.appendChild(taskDelete);
        // li inset in ul
        taskList.appendChild(li);
        // empyt taskInput
        taskInput.value = "";

    }
};

function removeTask(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm('Are you sure?')) {
            let element = e.target.parentElement;
            element.remove();
        }
    }

};

function clearTask(e){
    // taskList.innerHTML = '';

    // faster method
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}