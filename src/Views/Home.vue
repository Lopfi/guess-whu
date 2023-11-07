<template>
  <h1>Home</h1>
  <router-link to="/sets"> Set Select </router-link>
</template>

<script lang="ts">
export default {
  data: () => ({
    set: "none" as String,
  }),
};
</script>
