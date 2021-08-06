

  import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBiOoUbujfpvQN5F4ZEisok5IVDDAVEoFQ",
    authDomain: "ipzproject-77b9e.firebaseapp.com",
    projectId: "ipzproject-77b9e",
    storageBucket: "ipzproject-77b9e.appspot.com",
    messagingSenderId: "746403657897",
    appId: "1:746403657897:web:680c28fe6e77e11bf4d1b8",
    measurementId: "G-HMGXQT2HRS"
  })

const db = firebaseApp.firestore()

const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }