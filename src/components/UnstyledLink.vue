<template>
  <router-link :to="to">
    <slot> </slot>
  </router-link>
</template>

<style>
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  text-decoration: none;
  color: inherit;
}
</style>

<script lang="ts">
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
