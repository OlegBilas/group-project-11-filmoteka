import { auth } from './auth';
import { app } from './firebaseConfig';

import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  collection,
} from 'firebase/firestore';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const userId = localStorage.getItem('fireBaseAuthorized');

async function addToFirebase(dataAboutFilm) {
  try {
    if (!dataAboutFilm) return;
    const docRef = await setDoc(
      doc(db, `${userId}_${QUE_WATCHED}`, dataAboutFilm.id),
      dataAboutFilm
    );
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function removeFromFirebase(dataAboutFilm) {
  try {
    if (!dataAboutFilm) return;
    const docRef = await deleteDoc(
      doc(db, `${userId}_${QUE_WATCHED}`, dataAboutFilm.id)
    );
    console.log('Document deleted with ID: ', dataAboutFilm.id);
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
}

async function getFromFirebase(QUE_WATCHED) {
  console.log(userId);
  const films = await getDocs(collection(db, `${userId}_${QUE_WATCHED}`));
  if (films.docs.length > 0) {
    return films.docs;
  } else {
    console.error("Error of getting film's data");
    return [];
  }
}

export { getFromFirebase, addToFirebase, removeFromFirebase };
