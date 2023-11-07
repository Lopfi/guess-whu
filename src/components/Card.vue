<template>
  <q-card class="card" @click="changeState()">
    <q-img :src="img" :ratio="3 / 4" width="120px">
      <q-icon
        :name="state"
        :color="state == 'close' ? 'red' : 'green'"
        size="120px"
      />
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
  },
  data: () => ({
    state: "none",
  }),
  methods: {
    changeState() {
      switch (this.state) {
        case "none":
          this.state = "close";
          break;
        case "close":
          this.state = "done";
          break;
        default:
          this.state = "none";
          break;
      }
    },
  },
};
</script>
