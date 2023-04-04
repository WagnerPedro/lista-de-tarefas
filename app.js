"use strict";

let addTask = document.querySelector(".btn-add");
let noteWindow = document.querySelector(".note-box");
let moreTasks = document.querySelector(".note-box-btn");
let moreOptionsBtn = document.querySelector(".more-options-btn");
let colorsModal = document.querySelector(".more-options")
let closeModal = document.querySelector(".close-note-box-btn");
let modalContent = document.getElementById("input-note");

function mostraModal(addTask) {
  addTask.addEventListener("click", ()=> {
    noteWindow.style.display = 'block'
  })
}

addTask.addEventListener("click", mostraModal(addTask))

