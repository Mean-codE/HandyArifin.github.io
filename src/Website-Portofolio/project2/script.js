document.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("addTaskButton").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Silakan masukkan tugas!");
    return;
  }

  addTask(taskText);
  taskInput.value = "";
});

function addTask(taskText) {
  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
    saveTasks();
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-button";
  editButton.addEventListener("click", function () {
    const newTaskText = prompt("Edit tugas:", taskText);
    if (newTaskText) {
      li.firstChild.textContent = newTaskText;
      saveTasks();
    }
  });

  li.appendChild(editButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  const taskListItems = document.querySelectorAll("#taskList li");
  taskListItems.forEach((item) => {
    tasks.push(item.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    addTask(task);
  });
}
