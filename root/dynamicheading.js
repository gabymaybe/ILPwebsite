const words = ["coding", "problem-solving", "building", "creating", "innovating"];
let i = 0;
let j = 0;
const speed = 100; // Typing speed in ms
const delay = 2000; // Delay before changing word
const textElement = document.getElementById("dynamic-text");

function typeWriter() {
  if (j < words[i].length) {
    textElement.textContent += words[i][j];
    j++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      textElement.textContent = "";
      j = 0;
      i = (i + 1) % words.length;
      typeWriter();
    }, delay);
  }
}

typeWriter();