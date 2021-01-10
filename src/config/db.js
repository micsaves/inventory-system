import Firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQYzvCHWpMypmsxoctq1XSeIesw0kt2wY",
    authDomain: "inventorysystem-36354.firebaseapp.com",
    databaseURL: "https://inventorysystem-36354-default-rtdb.firebaseio.com",
    projectId: "inventorysystem-36354",
    storageBucket: "inventorysystem-36354.appspot.com",
    messagingSenderId: "30230262116",
    appId: "1:30230262116:web:d98573f478013b429fca71",
    measurementId: "G-49V0CE1DJ3"
  };

  let app = Firebase.initializeApp(firebaseConfig)
  export const db = app.database()