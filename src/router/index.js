// import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
import Ingredient from "../views/Ingredient.vue";
import Name from "../views/Name.vue";
// import About from "@/views/About.vue";
// Vue.use(VueRouter);

const routes = [
  {
    path: "/Ingredient",
    name: "Ingredient",
    component: Ingredient,
  },
  // {
  //   path: "/Name",
  //   name: "Name",
  //   component: Name,
  // },
  {
    path: "/",
    name: "Name",
    component: Name,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
/*const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes,
});
 */
