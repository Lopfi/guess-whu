<template>
  <router-link :to="`/guess-whu/game/${name}`">
    <Card>
      <img :src="img" :ratio="4 / 3" :width="180" />

      <q-card-section>
        <div class="name">{{ name }}</div>
      </q-card-section>
    </Card>
  </router-link>
</template>

<style></style>

<script lang="ts">
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
