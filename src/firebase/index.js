import firebase from 'firebase/app'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyA_HQYEC6LdTqeDKN5OsIRf_cG0QlA5b6Y",
    authDomain: "portfolio-cb59a.firebaseapp.com",
    databaseURL: "https://portfolio-cb59a-default-rtdb.firebaseio.com",
    projectId: "portfolio-cb59a",
    storageBucket: "portfolio-cb59a.appspot.com",
    messagingSenderId: "780774287440",
    appId: "1:780774287440:web:f4ed58d429ce677b15c955",
    measurementId: "G-DGQTTCTEGY"
  };

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();

  export {storage, firebase as default}