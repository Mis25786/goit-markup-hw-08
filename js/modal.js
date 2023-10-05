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
//  ====================================
// const refs = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector(".js-backdrop"),
// };

// // вішаємо слухачів на кнопки і бекдроп
// refs.openModalBtn.addEventListener("click", onOpenModal);
// refs.closeModalBtn.addEventListener("click", onCloseModal);
// refs.backdrop.addEventListener("click", onBackdropClick);

// function onOpenModal() {
//   // вішаємо слухача на віндов коли модалка відкрита
//   window.addEventListener("keydown", onEscKeyPress);
//   // додаємо боді клас show-modal
//   document.body.classList.add("show-modal");
// }

// function onCloseModal() {
//   // знімаємо слухача коли модальне вікно закривається
//   window.removeEventListener("keydown", onEscKeyPress);
//   // видаляємо в боді клас show-modal
//   document.body.classList.remove("show-modal");
// }

// function onBackdropClick(e) {
//   // провіряємо чи відбувся клік по бекдропу а не модальному вікні якщо так то закриваємо його
//   if (e.target === e.currentTarget) {
//     onCloseModal();
//   }
// }

// function onEscKeyPress(e) {
//   // провіряємо чи нажата клавіша є клавішою Escape
//   if (e.code === "Escape") {
//     onCloseModal();
//   }
// }
