// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFJyuLyeIk9-E9nQwjmER1k91jCxigYzs",
  authDomain: "login-messages-app.firebaseapp.com",
  projectId: "login-messages-app",
  storageBucket: "login-messages-app.appspot.com",
  messagingSenderId: "912386807401",
  appId: "1:912386807401:web:e8c5a57de75147d68374f8",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
