// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();
// ==============================================

const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.modal.addEventListener("click", onCloseModalBackdropClick);

function onOpenModal() {
  window.addEventListener("keydown", onCloseModalEscKeyPress);
  refs.modal.classList.remove("is-hidden");
}

function onCloseModal() {
  window.removeEventListener("keydown", onCloseModalEscKeyPress);
  refs.modal.classList.add("is-hidden");
}

function onCloseModalBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onCloseModalEscKeyPress(e) {
  console.log(e.code);
  if (e.code === "Escape") {
    onCloseModal();
  }
}
