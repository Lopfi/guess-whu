<template>
  <h1>{{ this.set.name }}</h1>
  <div class="q-gutter-sm fit row wrap">
    <Card
      v-for="(card, n) in this.set.cards"
      :name="card.name"
      :img="card.image"
      :key="`sm-${n}`"
    />
  </div>
</template>

<style></style>

<script>
import Card from "../components/Card.vue";
import { getSet } from "../lib/sets.ts";

export default {
  data: () => ({
    set: Set,
  }),
  components: {
    Card,
  },
  async beforeMount() {
    this.set = await getSet(this.$route.params.set);
  },
};
</script>
