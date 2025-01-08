const cutouts = document.querySelectorAll('.cutout');

const videoContainer = document.querySelector('.video-container');

function updateCutouts() {
  const polygons = Array.from(cutouts).map(cutout => {
    const rect = cutout.getBoundingClientRect();
    const topLeft = `${-rect.left}px  ${rect.top}px`;
    const topRight = `${rect.right}px ${rect.top}px`;
    const bottomRight = `${rect.right}px ${rect.bottom}px`;
    const bottomLeft = `${-rect.left}px ${rect.bottom}px`;
    return `${topLeft}, ${topRight}, ${bottomRight}, ${bottomLeft}`;
  });

  videoContainer.style.clipPath = `polygon(${polygons.join(', ')})`;
}

window.addEventListener('resize', updateCutouts);
window.addEventListener('DOMContentLoaded', updateCutouts);
