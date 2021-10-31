import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCZnJNb6L2FzvNksJo7Y_Ek4SF9g_aMk2s",
  authDomain: "complaint-forum-2a382.firebaseapp.com",
  projectId: "complaint-forum-2a382",
  storageBucket: "complaint-forum-2a382.appspot.com",
  messagingSenderId: "346337980913",
  appId: "1:346337980913:web:bafa5e7f94ac7ca356d450"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

