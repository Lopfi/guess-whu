<template>
  <q-card class="card">
    <slot> </slot>
  </q-card>
</template>

<style>
.card {
  width: 200px;
  height: 270px;
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
  name: "Card",
};
</script>
