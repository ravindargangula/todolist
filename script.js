
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
            taskList.appendChild(listItem);
            taskInput.value = "";

            const deleteBtn = listItem.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
        }
    });
});