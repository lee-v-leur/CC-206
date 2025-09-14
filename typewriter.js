const textArray = [
  "UI/UX Enthusiast",
  "BSCS 3B AI Student",
  "Applications Development and Emerging Technologies"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const speed = 120;

function type() {
  currentText = textArray[i];
  if (!isDeleting) {
    document.getElementById("typewriter").textContent = currentText.slice(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    document.getElementById("typewriter").textContent = currentText.slice(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % textArray.length;
    }
  }
  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);
