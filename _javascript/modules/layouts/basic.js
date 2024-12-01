document.body.style.border = '5px solid green';

import { back2top, loadTooptip, modeWatcher } from '../components';

export function basic() {
  window.alert('Basic layout');
  modeWatcher();
  back2top();
  loadTooptip();
}
