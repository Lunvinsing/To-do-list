const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");


const addTask = () => {
    if (inputBox.value === "") {
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please enter a task!",
});

} else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.append(li);
    let span = document.createElement("span");
    span.innerHTML = "&#10006;";
    li.append(span);
}
inputBox.value = "";
saveTasks();
}



taskList.addEventListener("click", (e) => {
if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTasks();
} else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTasks();
}
});


const saveTasks = () => {
      localStorage.setItem("tasks", taskList.innerHTML);
}


const loadTasks = () => {
      taskList.innerHTML = localStorage.getItem("tasks");
}

loadTasks();