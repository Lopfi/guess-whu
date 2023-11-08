import { createRouter, createWebHistory } from "vue-router";
import Game from "../views/Game.vue";
import Sets from "../views/Sets.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/guess-whu",
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
