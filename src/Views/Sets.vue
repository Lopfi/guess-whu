<template>
  <div class="q-gutter-sm fit row wrap">
    <SetCard
      v-for="(set, n) in this.sets"
      :name="set.name"
      :img="set.thumbnail"
      :key="`sm-${n}`"
    />
  </div>
</template>

<style></style>

<script>
import SetCard from "/src/components/SetCard.vue";
import { getSets } from "/src/lib/sets.ts";

export default {
  data: () => ({
    sets: [],
  }),
  components: {
    SetCard,
  },
  async created() {
    this.sets = await getSets();
    console.log(this.sets);
  },
};
</script>
