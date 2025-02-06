const blob = document.getElementById('blob');

// Check if the blob is correctly selected
if (!blob) {
  console.error('Blob element not found!');
}

document.addEventListener('mousemove', (event) => {
  const { clientX: x, clientY: y } = event;

  // Debug cursor coordinates


  // Move the blob smoothly
  blob.style.transform = `translate(${x - 50}px, ${y - 50}px)`;

  // Calculate and apply dynamic color
  const hue = (x / window.innerWidth) * 360;
  blob.style.background = `hsla(${hue},50%,50%,1)`;
  
  //`hsl(${hue}, 70%, 60%)`; /*
});