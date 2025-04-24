// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDEwawPHfFTi4ImLeEsUy1rh7y_WSKk7PY",
    authDomain: "form-6a028.firebaseapp.com",
    projectId: "form-6a028",
    storageBucket: "form-6a028.firebasestorage.app",
    messagingSenderId: "304856997731",
    appId: "1:304856997731:web:6962a1c339f901cfcdbd56"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
//Bez parametru provider zapyta o użytkownika
provider.setCustomParameters({
    prompt: 'select_account'
})

const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const userSignIn = async () => {
  signInWithPopup(auth, 
  provider).then((result) => {
  const user = result.user;
  console.log(user);
  }).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  })
}

const userSignOut = async () => {
    signOut(auth).then(() => {
    alert("You have been signed out!")
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    })
   }
onAuthStateChanged(auth, (user) => {
    if (user) {
        alert("You are authenticated with Google");
        console.log(user);
    }
   })
   signInButton.addEventListener("click", userSignIn);
   signOutButton.addEventListener("click", userSignOut);