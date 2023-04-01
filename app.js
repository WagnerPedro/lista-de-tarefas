var addTask = document.querySelector(".btn-add");
var noteWindow = document.querySelector(".note-box");

// Hoje em dia, umas das carreiras mais promissoras em TI é sem dúvidas o desenvolvimento web, que tem crescido de uma forma estrondosa.

addTask.addEventListener("click", function () {
  // abre o modal
  noteWindow.style.display = "block";
  //   pega o que nele foi digitado
  var noteWindowContent = document.getElementById("input-note");
  // pega o botão de fechar
  var noteWindowCloseButton = document.querySelector(".close-note-box-btn");
  //   adiciona um evento ouvidor, com um callback pra fechar o modal
  noteWindowCloseButton.addEventListener("click", function () {
    //agora que foi clicado, pega no conteúdo e salva em localstorage
    var createdAt = `${new Date().getHours()}:${new Date().getMinutes()}`;
    var noteInformation = [];
    noteInformation.push({
      note: noteWindowContent.value,
      createdAt,
    });

    // localStorage.setItem();
    // se o modal estiver sendo mostrado, vou escondê-lo
    // if ((noteWindow.style.display = "block")) {
    //   noteWindow.style.display = "none";
    // }

    // limpa o conteúdo do modal
    noteWindowContent.value = "";
    console.log(noteInformation);
  });
});

// var tasks = ["Levantar as 6 AM", "Tomar pequeno almoço", "treino de pernas"];
// var tasksContainer = document.querySelector(".tasks");

// for (var i = 0; i < tasks.length; i++) {
//   tasksContainer.innerHTML += `
//     <div class="task">
//     <span class="time">21:08</span>
//     <p>
//         ${tasks[i]}
//     </p>
//     </div>
//   `;
// }
