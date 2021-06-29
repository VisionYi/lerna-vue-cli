<template>
  <div id="app">
    Global UI
    <br>
    <v-button label="New VButton" icon="mdi-light:home"></v-button>
  </div>
</template>

<script>
import VButton from './components/VButton.vue';

export default {
  components: { VButton },
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
