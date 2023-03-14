const first = document.querySelector(".sidebar-element:nth-child(1)");
const second = document.querySelector(".sidebar-element:nth-child(2)");
const third = document.querySelector(".sidebar-element:nth-child(3)");
const four = document.querySelector(".sidebar-element:nth-child(4)");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  // Ajouter une classe CSS pour activer l'animation
  first.classList.add("animate");
  second.classList.add("animate");
  third.classList.add("animate");
  four.classList.add("animate");
});
