<template>
  <router-link :to="`/game/${name}`">
    <q-card class="card">
      <img :src="img" :ratio="4 / 3" :width="180" />

      <q-card-section>
        <div class="name">{{ name }}</div>
      </q-card-section>
    </q-card>
  </router-link>
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
</style>

<script>
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
    path: {
      type: String,
      required: true,
    },
  },
};
</script>
