"use strict";

let addTask = document.querySelector(".btn-add");
let modal = document.querySelector(".note-box");
let moreTasks = document.querySelector(".note-box-btn");
let moreOptionsBtn = document.querySelector(".more-options-btn");
let colorsModal = document.querySelector(".more-options");
let closeModal = document.querySelector(".close-note-box-btn");
let modalContent = document.getElementById("input-note");

// Abrir modal
function mostrarModal(addTask) {
  addTask.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

addTask.addEventListener("click", mostrarModal(addTask));

// Fechar modal
function fecharModal(closeModal, modal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

closeModal.addEventListener("click", fecharModal(closeModal, modal));
