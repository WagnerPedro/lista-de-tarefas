const input = document.getElementById("input-note");
const listTasks = document.querySelector(".list-tasks");
const addNote = document.querySelector(".btn-add");
const noteBox = document.querySelector(".note-box");
const closeNoteBoxBtn = document.querySelector(".close-note-box-btn");
const noteBoxBtn = document.querySelector(".note-box-btn");
let tasks = [];

function addNoteBox() {
  noteBox.style.display = "block";
}
addNote.addEventListener("click", addNoteBox);

function closeNoteBox() {
  noteBox.style.display = "none";
}
closeNoteBoxBtn.addEventListener("click", closeNoteBox);

function showError(error) {
  const messageError = document.createElement("p");
  messageError.textContent = error;
  messageError.classList.add("error");
  listTasks.appendChild(messageError);

  setTimeout(() => {
    messageError.remove();
    addNoteBox();
  }, 3000);

  //   console.log(error)
}

function addTasks() {
  const task = input.value;
  if (task === "") {
    showError("O campo está vazio!");
    closeNoteBox();
    input.value = "";
    return;
  }
  closeNoteBox();
  const taskObject = {
    task: tasks,
    id: Date.now(),
    createdAt: new Date().getHours() + ":" + new Date().getMinutes()
  }
  tasks = [...tasks, taskObject]

  
}

noteBoxBtn.addEventListener("click", addTasks);
