import firebase from 'firebase';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: 'AIzaSyD7CsEm56jWNDQOKLhPLg-pdR78AzWnp1c',
  authDomain: 'team-project-movie.firebaseapp.com',
  databaseURL:
    'https://team-project-movie-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'team-project-movie',
  storageBucket: 'team-project-movie.appspot.com',
  messagingSenderId: '621199458479',
  appId: '1:621199458479:web:54f2e6677796ea7d8c145a',
  measurementId: 'G-WHTCB43FF1',
};

export const app = firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

var uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>',
};

// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);

// if (ui.isPendingRedirect()) {
//   ui.start('#firebaseui-auth-container', uiConfig);
// }
const auth = getAuth();

const initApp = function () {
  const signOut = document.getElementById('sign-out');
  const signIn = document.getElementById('sign-in');
  firebase.auth().onAuthStateChanged(
    function (user) {
      if (user) {
        console.log(signOut);
        signIn.classList.add('is-hidden');
        signOut.addEventListener('click', e => {
          firebase.auth().signOut();
          signIn.classList.remove('is-hidden');
          signOut.classList.add('is-hidden');
        });
        console.log('User is signed in');
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function (accessToken) {});
      } else {
        console.log('User is signed out.');
        // User is signed out.
        signOut.classList.add('is-hidden');
        signIn.addEventListener('click', e => {
          firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
              /** @type {firebase.auth.OAuthCredential} */
              var credential = result.credential;

              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = credential.accessToken;
              // The signed-in user info.
              var user = result.user;
              // ...
              signIn.classList.add('is-hidden');
              signOut.classList.remove('is-hidden');
            })
            .catch(error => {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        });
        // document.getElementById('account-details').textContent = 'null';
      }
    },
    function (error) {
      console.log(error);
    }
  );
};
window.addEventListener('load', function () {
  initApp();
});
