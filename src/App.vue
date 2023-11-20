<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <UnstyledLink to="/guess-whu" class="">
          <q-toolbar-title class="absolute-center"> Guess Whu </q-toolbar-title>
        </UnstyledLink>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<style>
body,
html {
  background-image: url("/src/assets/background.jpg");

  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script lang="ts">
import UnstyledLink from "./components/UnstyledLink.vue";

export default {
  name: "LayoutDefault",
  components: { UnstyledLink },
};
</script>
