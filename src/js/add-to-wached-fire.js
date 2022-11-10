import { getFirestore } from 'firebase/firestore';
import { setDoc, doc, getDoc, arrayUnion, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebase/auth';
import app, { auth } from './firebaseUI';

const db = getFirestore(app);

export default function addToWatched(film) {
  try {
    onAuthStateChanged(auth, user => {
      if (user) {
        getFromFarebase(user, film);
      } else {
        console.log('please log in');
      }
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function getFromFarebase(user, movie) {
  const uid = user.uid;
  const docRef = doc(db, uid, 'watched');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    searchMovieInFarebase(movie, docSnap.data(), user);
  } else {
    console.log('нужно создать');
    setToFarebase(user, movie);
  }
}

async function setToFarebase(user, movie) {
  const uid = user.uid;
  const movieNow = {
    film: [movie.data],
  };
  const addCollection = doc(db, uid, 'watched');
  setDoc(addCollection, movieNow);
}

async function updateInFarebase(user, movie) {
  const uid = user.uid;
  const movieRef = doc(db, uid, 'watched');
  await updateDoc(movieRef, {
    film: arrayUnion(movie.data),
  });
}

function searchMovieInFarebase(movie, data, user) {
  console.log(data.film);
  for (const movieInBase of data.film) {
    console.log(movieInBase.id);
    if (movieInBase.id === movie.data.id) {
      console.log(`Нашел фильм`);
      return;
    } else {
      updateInFarebase(user, movie);
    }
  }
}
