import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import Sets from "../views/Sets.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/sets",
      name: "Sets",
      component: Sets,
    },
    {
      path: "/game/:set",
      name: "Game",
      component: Game,
    },
  ],
});

export default router;
