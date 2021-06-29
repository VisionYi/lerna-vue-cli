<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <v-button label="New VButton" icon="mdi-light:home"></v-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { VButton } from 'global-ui';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    VButton,
  },
};
</script>
