import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DefaultLayout from '../layout/DefaultLayout.vue'
import CharacterView from '../views/CharacterView.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: '/character',
        name: 'Character',
        component: CharacterView
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
