const gif = document.getElementById("gif");
const playButton = document.getElementById("play-gif-btn");

let isPlaying = false; // Track whether the GIF is playing

playButton.addEventListener("click", () => {
  // Update the `src` attribute of the image
  gif.src = isPlaying ? "Images/rome.jpg" : "Images/Colloseumgif.gif";
  playButton.textContent = isPlaying ? "Play GIF" : "Stop GIF";
  isPlaying = !isPlaying; // Toggle the play state
});