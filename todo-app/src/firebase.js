// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyB5UIJQFsTB6NPcLoit4nGE68xGDa1ENPM",
//     authDomain: "todo-app-with-react-fire-3fb03.firebaseapp.com",
//     projectId: "todo-app-with-react-fire-3fb03",
//     storageBucket: "todo-app-with-react-fire-3fb03.appspot.com",
//     messagingSenderId: "793161110487",
//     appId: "1:793161110487:web:aeea0b868ac275732cb192",
//     measurementId: "G-3PHJM8J4WN"
//   };
  
import firebase from "firebase"

const  firebaseapp = firebase.initializeApp({
        apiKey: "AIzaSyB5UIJQFsTB6NPcLoit4nGE68xGDa1ENPM",
    authDomain: "todo-app-with-react-fire-3fb03.firebaseapp.com",
    projectId: "todo-app-with-react-fire-3fb03",
    storageBucket: "todo-app-with-react-fire-3fb03.appspot.com",
    messagingSenderId: "793161110487",
    appId: "1:793161110487:web:aeea0b868ac275732cb192",
    measurementId: "G-3PHJM8J4WN"
})

const db= firebaseapp.firestore();
const auth=firebase.auth();

export {db};