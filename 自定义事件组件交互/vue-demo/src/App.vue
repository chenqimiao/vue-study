<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <my-component @onEvent="onEvent"></my-component>
  <p> {{message}} </p>
</template>

<script>
import MyComponent from './components/MyComponent.vue';
export default {
  name: 'App',
  components: {
    MyComponent
  },
  data() {
    return {
      message: ""
    }
  },
  methods:{
    onEvent(data){
      alert(data);
      this.message = data;
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
