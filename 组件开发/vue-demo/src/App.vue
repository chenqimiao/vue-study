<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <!-- 显示组件 -->
  <MyComponent></MyComponent>
  <my-component></my-component>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 1.引入组件
import MyComponent from './components/MyComponent.vue';

export default {
  name: 'App',
  // 2.挂载组件
  components: {
    HelloWorld,
    MyComponent
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
