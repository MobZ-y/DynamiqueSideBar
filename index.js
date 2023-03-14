const first = document.querySelector(".sidebar-element:nth-child(1)");
const second = document.querySelector(".sidebar-element:nth-child(2)");
const third = document.querySelector(".sidebar-element:nth-child(3)");
const four = document.querySelector(".sidebar-element:nth-child(4)");
const btn = document.getElementById("btn");

let isAnimated = false;

btn.addEventListener("click", () => {
  if (isAnimated) {
    four.classList.remove("animate");
    setTimeout(() => {
      third.classList.remove("animate");
    }, 100);
    setTimeout(() => {
      second.classList.remove("animate");
    }, 200);
    setTimeout(() => {
      first.classList.remove("animate");
    }, 300);
    isAnimated = false;
  } else {
    first.classList.add("animate");
    setTimeout(() => {
      second.classList.add("animate");
    }, 100);
    setTimeout(() => {
      third.classList.add("animate");
    }, 200);
    setTimeout(() => {
      four.classList.add("animate");
    }, 300);
    isAnimated = true;
  }
});
