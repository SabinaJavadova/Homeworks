function addition() {
  let value1 = parseFloat(document.querySelector(".val1").value);
  let value2 = parseFloat(document.querySelector(".val2").value);

  if (isNaN(value1) || isNaN(value2)) {
    alert("Zəhmət olmasa, hər iki ədədin düzgün daxil edildiyinə əmin olun.");
    return;
  }

  let result = value1 + value2;

  document.querySelector(".result span").innerText = result;
}
function multipl() {
  let value1 = parseFloat(document.querySelector(".val1").value);
  let value2 = parseFloat(document.querySelector(".val2").value);

  if (isNaN(value1) || isNaN(value2)) {
    alert("Zəhmət olmasa, hər iki ədədin düzgün daxil edildiyinə əmin olun.");
    return;
  }

  let result = value1 * value2;

  document.querySelector(".result span").innerText = result;
}
function substr() {
  let value1 = parseFloat(document.querySelector(".val1").value);
  let value2 = parseFloat(document.querySelector(".val2").value);

  if (isNaN(value1) || isNaN(value2)) {
    alert("Zəhmət olmasa, hər iki ədədin düzgün daxil edildiyinə əmin olun.");
    return;
  }

  let result = value1 - value2;

  document.querySelector(".result span").innerText = result;
}
function divis() {
  let value1 = parseFloat(document.querySelector(".val1").value);
  let value2 = parseFloat(document.querySelector(".val2").value);

  if (isNaN(value1) || isNaN(value2)) {
    alert("Zəhmət olmasa, hər iki ədədin düzgün daxil edildiyinə əmin olun.");
    return;
  }

  let result = value1 / value2;

  document.querySelector(".result span").innerText = result;
}

function reset() {
  document.querySelector(".val1").value = "";
  document.querySelector(".val2").value = "";
  document.querySelector(".result span").innerText = 0;
}

document.querySelector(".add").addEventListener("click", addition);
document.querySelector(".mult").addEventListener("click", multipl);
document.querySelector(".sub").addEventListener("click", substr);
document.querySelector(".divi").addEventListener("click", divis);
document.querySelector(".reset").addEventListener("click", reset);
