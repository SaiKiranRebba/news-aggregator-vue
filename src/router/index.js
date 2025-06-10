import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category/:category",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/CategoryView.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/SearchView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
