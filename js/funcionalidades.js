// Abrir modal
function fnMostrarModal(addTask) {
  addTask.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

// Fechar modal
function fnFecharModal(closeModal, modal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

export default {
  mostrarModal: fnMostrarModal,
  fecharModal: fnFecharModal
};
