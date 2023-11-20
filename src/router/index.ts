import { createRouter, createWebHistory } from "vue-router";
import Game from "../views/Game.vue";
import Sets from "../views/Sets.vue";
import Test from "../views/Test.vue";

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
    {
      path: "/guess-whu/test",
      name: "Test",
      component: Test,
    },
  ],
});

export default router;
