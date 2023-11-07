<template>
  <h1>{{ set.name }}</h1>
  <div class="q-gutter-sm fit row wrap">
    <Card
      v-for="(card, n) in set.cards"
      :name="card.name"
      :img="card.image"
      :key="`sm-${n}`"
    />
  </div>
</template>

<style></style>

<script lang="ts">
import Card from "../components/Card.vue";
import { getSet, Set } from "../lib/sets.ts";

export default {
  data: () => ({
    set: {} as Set,
  }),
  components: {
    Card,
  },
  async beforeMount() {
    const setParam = Array.isArray(this.$route.params.set)
      ? this.$route.params.set[0]
      : this.$route.params.set;
    this.set = (await getSet(setParam)) ?? { name: "Not Found", cards: [] };
  },
};
</script>
