<template>
  <Card class="flip-card" @click="flip()">
    <div
      class="flip-card-inner"
      :style="{ transform: closed ? 'rotateY(180deg)' : 'rotateY(0deg)' }"
    >
      <q-card class="flip-card-front">
        <q-img :src="img" :ratio="3 / 4" width="120px" />

        <q-card-section>
          <div class="name">{{ name }}</div>
        </q-card-section>
      </q-card>
      <q-card class="flip-card-back">
        <q-img src="questionmark.svg" height="80%" />
      </q-card>
    </div>
  </Card>
</template>

<style scoped>
.flip-card {
  padding: 0;
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  border-radius: 4px;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  padding: 10px;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #ffffff;
  color: black;
}

/* Style the back side */
.flip-card-back {
  padding-top: 10%;
  background-color: blue;
  color: white;
  transform: rotateY(180deg);
}
</style>

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
