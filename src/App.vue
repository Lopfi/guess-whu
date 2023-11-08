<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <router-link to="/guess-whu">
          <q-toolbar-title> Guess Whu </q-toolbar-title>
        </router-link>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: "LayoutDefault",
};
</script>
