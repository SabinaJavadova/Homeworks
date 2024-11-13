const buton = document.querySelector(".butn");
const menu = document.querySelector(".menu");
const x = document.querySelector("span");

buton.addEventListener("click", () => {
  menu.style.width = "20%";
  buton.style.display = "none";
});
x.addEventListener("click", () => {
  menu.style.width = "0px";
  buton.style.display = "block";
});
