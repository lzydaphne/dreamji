// Get a RTDB instance
import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCH4BD22xgaIkZY_t_3xtyLwj3uId667F4",
  authDomain: "cooking-d05c6.firebaseapp.com",
  databaseURL:
    "https://cooking-d05c6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cooking-d05c6",
  storageBucket: "cooking-d05c6.appspot.com",
  messagingSenderId: "376242448910",
  appId: "1:376242448910:web:a46e6dcda0a7d94f22ea5f",
  measurementId: "G-V0WR8KK869",
};
const firebaseApp = firebase.initializeApp(config);

const fdb = firebaseApp.firestore();

const recipeCollection = fdb.collection("recipe");

// export const db = firebase
//   .initializeApp({
//     databaseURL:
//       "https://cooking-d05c6-default-rtdb.asia-southeast1.firebasedatabase.app/",
//   })
//   .database();
export { rdb, recipeCollection };
