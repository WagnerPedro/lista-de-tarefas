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

function addTasks() {
  const task = input.value;
  if (task === "") {
    showError("The field is empty...");
    return;
  }

  const taskObj = {
    task,
    id: Date.now(),
  };
  tasks = [...tasks, taskObj];

  createHTML();
  input.value = "";
}

function createHTML() {
  clearHTML();

  if (tasks.length > 0) {
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `${task.task} <span task-id="${task.id}" >X</span>`;

      listTasks.appendChild(li);
    });
  }

  sincronizationStorage();
}

function sincronizationStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showError(error){
    const messageError = document.createElement('p');
    messageError.textContent = error;
    messageError.classList.add('error');

    message.appendChild(messageError);
    setTimeout(() => {
        messageError.remove();
    },2000);

}

function clearHTML(){
    listTasks.innerHTML = '';
}