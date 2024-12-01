/**
 * Add listener for theme mode toggle
 */
import Theme from '../theme.js';

document.body.style.border = '5px solid blue';

const $toggle = document.getElementById('mode-toggle');

export function modeWatcher() {

  window.alert('Mode watcher');

  if (!$toggle) {
    window.alert('Theme toggle button not found');
    return;
  }

  $toggle.addEventListener('click', () => {
    window.alert('Theme toggle clicked');
    Theme.flip();
  });
}
