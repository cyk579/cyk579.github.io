const preview = document.querySelector('#skating-preview');
const toggle = document.querySelector('#preview-toggle');
const dialog = document.querySelector('#demo-dialog');
const player = document.querySelector('#skating-player');
let resumePreview = false;

function updateToggle() {
  toggle.textContent = preview.paused ? 'Play preview' : 'Pause preview';
}

preview.muted = true;
toggle.hidden = false;
preview.addEventListener('play', updateToggle);
preview.addEventListener('pause', updateToggle);
toggle.addEventListener('click', () => {
  if (preview.paused) preview.play().catch(updateToggle);
  else preview.pause();
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  preview.autoplay = false;
  preview.pause();
} else {
  preview.play().catch(updateToggle);
}
updateToggle();

document.querySelectorAll('[data-open-video]').forEach(link => {
  link.addEventListener('click', event => {
    // Preserve the direct MP4 link for new-tab actions and older browsers.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey ||
        typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    resumePreview = !preview.paused;
    preview.pause();
    dialog.showModal();
    document.body.classList.add('video-open');
    player.currentTime = 0;
    player.play().catch(() => { /* Native controls remain available. */ });
  });
});

document.querySelector('#close-demo').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog &&
      (event.clientX < rect.left || event.clientX > rect.right ||
       event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  player.pause();
  document.body.classList.remove('video-open');
  if (resumePreview) preview.play().catch(updateToggle);
});
