let currentFontSize = 16;

const content = document.getElementById("content");
const increaseFontButton = document.getElementById("increaseFont");
const decreaseFontButton = document.getElementById("decreaseFont");

increaseFontButton.addEventListener("click", function () {
  currentFontSize += 2;
  content.style.fontSize = currentFontSize + "px";
});

decreaseFontButton.addEventListener("click", function () {
  if (currentFontSize > 10) {
    currentFontSize -= 2;
    content.style.fontSize = currentFontSize + "px";
  }
});

const colorInput = document.getElementById("colorInput");
const applyColorButton = document.getElementById("applyColor");

applyColorButton.addEventListener("click", function () {
  const color = colorInput.value;
  if (color) {
    content.style.color = color;
  } else {
    alert("Xahiş edirik, rəng dəyəri daxil edin!");
  }
});
