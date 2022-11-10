import { getFirestore } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from './firebaseUI';

const db = getFirestore(app);
const auth = getAuth();

export default async function checkOnWatched(film) {
  const user = auth.currentUser;
  if (user) {
    console.log(user.uid);
    return getFromFarebase(user, film);
  } else {
    return;
  }
}

async function getFromFarebase(user, movie) {
  const docRef = doc(db, user.uid, 'watched');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    console.log(searchMovieInFarebase(movie, docSnap.data(), user));
    return searchMovieInFarebase(movie, docSnap.data(), user);
  }
}

function searchMovieInFarebase(movie, data, user) {
  for (const movieInBase of data.film) {
    if (movieInBase.id === movie.data.id) {
      console.log(`Нашел фильм`);
      return true;
    }
  }
  return false;
}
