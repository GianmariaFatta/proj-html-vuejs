<script>
import AppHeader from './components/AppHeader.vue';
import CreateJumbo from './components/CreateJumbo.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: { AppHeader, CreateJumbo, AppMain, AppFooter }
}
</script>

<template>
  <AppHeader />
  <CreateJumbo />
  <AppMain />
  <AppFooter />
</template>

<style>
* {
  font-family: 'Alegreya', serif;
  font-family: 'Domine', serif;
}
</style>