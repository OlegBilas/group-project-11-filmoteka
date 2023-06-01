import { app } from './firebaseConfig';

import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  collection,
} from 'firebase/firestore/lite';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function addToFirebase(QUE_WATCHED, dataAboutFilm) {
  const userId = localStorage.getItem('fireBaseAuthorized');
  try {
    if (!dataAboutFilm) return;
    await setDoc(
      doc(db, `${userId}_${QUE_WATCHED}`, dataAboutFilm.id),
      dataAboutFilm
    );
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function removeFromFirebase(QUE_WATCHED, dataAboutFilm) {
  const userId = localStorage.getItem('fireBaseAuthorized');
  try {
    if (!dataAboutFilm) return;
    const docRef = await deleteDoc(
      doc(db, `${userId}_${QUE_WATCHED}`, dataAboutFilm.id)
    );

  } catch (e) {
    console.error('Error deleting document: ', e);
  }
}

async function getFromFirebase(QUE_WATCHED) {
  const userId = localStorage.getItem('fireBaseAuthorized');
  const films = await getDocs(collection(db, `${userId}_${QUE_WATCHED}`));
  const filmsArray = [];
  if (films.docs.length > 0) {
    films.forEach(doc => filmsArray.push(doc.data()));
  }
    return filmsArray;
}

export { getFromFirebase, addToFirebase, removeFromFirebase };
