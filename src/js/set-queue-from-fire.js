import { getFirestore } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebaseUI';
import { renderLibraryCrads } from './renderLibraryCrads';
import { renderEmptyImage } from './empty-page';

const db = getFirestore(app);
const auth = getAuth();

export default async function getQueueFromFire() {
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      getFromFarebase(user);
    } else {
      console.log('logout');
    }
  });
}

async function getFromFarebase(user) {
  const docRef = doc(db, user.uid, 'queue');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const films = docSnap.data().film;
    if (!films) {
      renderEmptyImage();
    } else {
      renderLibraryCrads(films);
    }
  } else {
    console.log('нету фильмов');
  }
}
