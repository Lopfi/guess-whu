<template>
  <h3>{{ set.name }}</h3>
  <div class="q-gutter-sm fit row wrap justify-center">
    <GameCard
      v-for="(card, n) in set.cards"
      :name="card.name"
      :img="card.image"
      :key="`sm-${n}`"
    />
  </div>
</template>

<style></style>

<script lang="ts">
import GameCard from "../components/GameCard.vue";
import { getSet, Set } from "../lib/sets.ts";

export default {
  data: () => ({
    set: {} as Set,
  }),
  components: {
    GameCard,
  },
  async beforeMount() {
    const setParam = Array.isArray(this.$route.params.set)
      ? this.$route.params.set[0]
      : this.$route.params.set;
    this.set = (await getSet(setParam)) ?? { name: "Not Found", cards: [] };
  },
};
</script>
