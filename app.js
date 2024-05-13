let radios = document.getElementsByTagName("input");
let labels = document.querySelectorAll("label");
let ratingNumber = null;
let submit = document.querySelector(".submit");

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", () => {
    ratingNumber = i + 1;
  });
}

for (const element of labels) {
  element.addEventListener("click", () => {
    for (const element of labels) {
      element.classList.remove("selected");
    }

    element.classList.toggle("selected");
  });
}

submit.addEventListener("click", () => {
  if (ratingNumber) {
    document.querySelector(
      ".result"
    ).textContent = `You selected ${ratingNumber} out of 5`;

    document
      .querySelector(".rating-component")
      .classList.toggle("close-rating-component");

    document
      .querySelector(".thankyou-component")
      .classList.toggle("open-thankyou-component");
  }
});

function reset() {
  for (const element of labels) {
    element.classList.remove("selected");
  }
  ratingNumber = null;
}

document.querySelector(".thankyou-component").addEventListener("click", () => {
  document
    .querySelector(".rating-component")
    .classList.toggle("close-rating-component");

  document
    .querySelector(".thankyou-component")
    .classList.toggle("open-thankyou-component");

  reset();
});
