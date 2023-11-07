<template>
  <q-card class="card" @click="flip()">
    <q-img :src="img" :ratio="3 / 4" width="120px">
      <q-icon v-show="closed" name="close" color="red" size="120px" />
    </q-img>

    <q-card-section>
      <div class="name">{{ name }}</div>
    </q-card-section>
  </q-card>
</template>

<style>
.card {
  width: 200px;
  height: 250px;
  color: black;
  font-size: large;
  font-weight: bold;
  text-align: center;
}
.name {
  user-select: none;
}
</style>

<script lang="ts">
export default {
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
