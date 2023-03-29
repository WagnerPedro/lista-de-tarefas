const btnAddtask = document.querySelector("span.btn-add")
const containerTasks = document.querySelector(".tasks")

// Evento ouvidor, chama uma caixa de notas
btnAddtask.addEventListener("click", (e) => {
    const modal = document.querySelector(".note-box")
    modal.style.display = 'block'
    //pega botões do modal
    // top buttoms
    const moreNoteInputBtn = document.querySelector(".note-box-btn")
    const moreNoteOptions = document.querySelector(".more-options-btn")
    const closeAndSave = document.querySelector(".close-note-box-btn")
    // bottom buttoms
    const boldBtn = document.querySelector(".bold-btn")
    const italicBtn = document.querySelector(".italic-btn")
    const underlineBtn = document.querySelector(".underline-btn")
    const listBtn = document.querySelector(".list-btn")
    // pega dados do textarea
    const inputNote = document.getElementById("input-note")
})