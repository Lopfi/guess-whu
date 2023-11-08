<template>
  <h3>Please select a set to play</h3>
  <div class="q-gutter-sm fit row wrap justify-center">
    <SetCard
      v-for="(set, n) in sets"
      :name="set.name"
      :img="set.thumbnail ?? 'https://via.placeholder.com/150'"
      :key="`sm-${n}`"
    />
  </div>
</template>

<style></style>

<script lang="ts">
import SetCard from "../components/SetCard.vue";
import { getSets, Set } from "../lib/sets.ts";

export default {
  data: () => ({
    sets: [] as Set[],
  }),
  components: {
    SetCard,
  },
  async created() {
    this.sets = await getSets();
  },
};
</script>
