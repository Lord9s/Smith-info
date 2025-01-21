document.addEventListener('DOMContentLoaded', () => {
  const numDrops = 2000; // Adjust number of rain drops
  const rainContainer = document.querySelector('.rain');
  for (let i = 0; i < numDrops; i++) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDelay = Math.random() * 5 + 's'; // Random delay
    rainContainer.appendChild(drop);
  }
});
