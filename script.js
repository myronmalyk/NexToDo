// script.js
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("taskList");

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.onclick = () => toggleComplete(taskItem);

    const taskContent = document.createElement("span");
    taskContent.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "✕";
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}

function toggleComplete(taskItem) {
    taskItem.classList.toggle("completed");
}
