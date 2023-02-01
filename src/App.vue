<script>
import AppHeader from './components/AppHeader.vue';
import CreateJumbo from './components/CreateJumbo.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: { AppHeader, CreateJumbo, AppMain }
}
</script>

<template>
  <AppHeader />
  <CreateJumbo />
  <AppMain />
  <footer></footer>
</template>

<style>
* {
  font-family: 'Alegreya', serif;
  font-family: 'Domine', serif;
}
</style>