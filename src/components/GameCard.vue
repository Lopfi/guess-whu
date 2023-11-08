<template>
  <Card @click="flip()">
    <q-img :src="img" :ratio="3 / 4" width="120px">
      <q-icon v-show="closed" name="close" color="red" size="120px" />
    </q-img>

    <q-card-section>
      <div class="name">{{ name }}</div>
    </q-card-section>
  </Card>
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
  data: () => ({
    closed: false,
  }),
  methods: {
    flip() {
      this.closed = !this.closed;
    },
  },
};
</script>
