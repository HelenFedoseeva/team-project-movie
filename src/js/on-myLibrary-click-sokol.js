import { renderEmptyImage } from './empty-page';
import { renderLibraryCrads } from './renderLibraryCrads';
import getQueueFromFire from './set-queue-from-fire';
import getWatchedFromFire from './set-wached-from-fire';
import { async } from '@firebase/util';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { on } from 'process';

const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
const galleryRef = document.querySelector('.gallery');

queueBtn.addEventListener('click', onQueueClick);

getWatchedFromFire();

async function onQueueClick(event) {
  event.preventDefault();
  clearContent();
  const fetch = await getQueueFromFire();
  watchedBtn.addEventListener('click', onWatchedClick);
}

async function onWatchedClick(event) {
  event.preventDefault();
  clearContent();
  const fetch = await getWatchedFromFire();
}

function clearContent() {
  galleryRef.innerHTML = '';
}
