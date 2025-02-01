const playButton = document.getElementById("play-gif-btn");
const gif = document.getElementById("gif");

let isPlaying = false;

playButton.addEventListener("click", () => {
  // Toggle image source without modifying size
  gif.src = isPlaying ? "Images/rome.jpg" : "Images/Colloseumgif.gif";
  playButton.textContent = isPlaying ? "Click me to combine the Colosseum with the starry night!" : "Stop GIF";

  isPlaying = !isPlaying; // Toggle play state
});