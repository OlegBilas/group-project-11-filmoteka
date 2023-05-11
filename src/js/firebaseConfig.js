import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFBT4l6qIJNa5FHkQwrhjL1oZ0g4xnyss",
  authDomain: "group-project-11-filmoteka.firebaseapp.com",
  projectId: "group-project-11-filmoteka",
  storageBucket: "group-project-11-filmoteka.appspot.com",
  messagingSenderId: "114137226490",
  appId: "1:114137226490:web:4cfd8cb3a42074d592bd43"
};

const app = initializeApp(firebaseConfig);

export { app };