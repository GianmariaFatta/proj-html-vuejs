<script>
import AppHeader from './components/AppHeader.vue'
import CreateJumbo from './components/CreateJumbo.vue';
export default {
  components: { AppHeader, CreateJumbo }
}
</script>

<template>
  <AppHeader />
  <CreateJumbo />
  <main></main>
  <footer></footer>
</template>

<style>
* {
  font-family: 'Alegreya', serif;
  font-family: 'Domine', serif;
}
</style>