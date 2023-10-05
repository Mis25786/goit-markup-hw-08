const listFilterBtn = document.querySelector(".site-filters__box");
const cardsProduct = document.querySelectorAll(".card-set__aside");

listFilterBtn.addEventListener("click", onChooseService);

function onChooseService(evt) {
  const targetId = evt.target.dataset.id;

  switch (targetId) {
    case "all":
      filter("card-set__aside");
      break;
    case "web-site":
      filter(targetId);
      break;
    case "design":
      filter(targetId);
      break;
    case "addition":
      filter(targetId);
      break;
    case "marketing":
      filter(targetId);
      break;
  }
}

function filter(productName) {
  cardsProduct.forEach((item) => {
    if (item.classList.contains(productName)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
