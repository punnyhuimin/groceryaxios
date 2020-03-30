import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyCRCoLIQU7vYgsa5sFr-Gc2Jamglz8ftY8",
    authDomain: "grocery-axios-70106.firebaseapp.com",
    databaseURL: "https://grocery-axios-70106.firebaseio.com",
    projectId: "grocery-axios-70106",
    storageBucket: "grocery-axios-70106.appspot.com",
    messagingSenderId: "620506518624",
    appId: "1:620506518624:web:09a2c90d6a7cee00561f05",
    measurementId: "G-2TK9DVSRQ2"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;