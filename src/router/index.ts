import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import Sets from "../views/Sets.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/guess-whu/",
      name: "Home",
      component: Home,
    },
    {
      path: "/guess-whu/sets",
      name: "Sets",
      component: Sets,
    },
    {
      path: "/guess-whu/game/:set",
      name: "Game",
      component: Game,
    },
  ],
});

export default router;
