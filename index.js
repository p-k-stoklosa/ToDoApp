const txtInput = document.querySelector('input');
const toDoList = document.querySelector('ul');
const btnReset = document.querySelector('.reset');
let number = 0;

const addTask = (e) => {
    if (e.keyCode === 13 && txtInput.value.length != 0 && number < 11) {
        let inputValue = txtInput.value;
        const li = document.createElement('li');
        toDoList.appendChild(li);
        const spanTxt = document.createElement('span');
        spanTxt.textContent = inputValue;
        li.appendChild(spanTxt);
        const spanIcon = document.createElement('span');
        const icon = document.createElement('i');
        icon.classList.add('material-icons');
        icon.textContent = "highlight_off";
        spanIcon.appendChild(icon);
        li.appendChild(spanIcon);
        txtInput.value = "";
        number++;
    }
}

const completeTask = (e) => {
    if ((e.target.tagName).toLowerCase() == "span") {
        const spanTxt = e.target;
        spanTxt.classList.toggle("complete");
    } else {
        return
    }
}

const deleteTask = (e) => {
    if (e.target.tagName == "I") {
        const liToDelete = e.target.closest("li");
        liToDelete.remove();
        number--;
    } else {
        return
    }
}

const resetTasks = () => {
    let listTasks = document.querySelectorAll('ul > li');
    listTasks.forEach.call(listTasks, (task) => task.parentNode.removeChild(task));
    number = 0;
}

txtInput.addEventListener('keydown', addTask);
toDoList.addEventListener('click', completeTask);
toDoList.addEventListener('click', deleteTask);
btnReset.addEventListener('click', resetTasks);