import { createApp } from "vue";
// import { createRouter, createWebHistory } from "vue-router";
// import './style.css'
import App from "./App.vue";
import router from "./router";
// import { firestorePlugin } from "vuefire";
// import { db } from "@/db";

// Vue.use(firestorePlugin);

createApp(App).use(router).mount("#app");
export default {
  data() {
    return {
      recipe: [],
    };
  },

  firestore: {
    recipe: db.collection("recipe"),
  },
};
