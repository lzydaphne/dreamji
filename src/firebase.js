import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const firebaseConfig = {
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
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const recipeCollection = db.collection("recipe");

// retrieve a collection
// db.collection("recipe")
//   .get()
//   .then((querySnapshot) => {
//     const documents = querySnapshot.docs.map((doc) => doc.data());
//     // do something with documents
//   });

// retrieve a document
db.collection("recipe")
  .doc(documentId)
  .get()
  .then((snapshot) => {
    const document = snapshot.data();
    console.log(document);
  });

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};
