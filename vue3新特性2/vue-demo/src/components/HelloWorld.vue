<template>
  <div class="hello">
    <h3>vue3新特性</h3>
    <p> {{msgFromApp}} </p>
  </div>
</template>

<script>
import { onMounted, inject } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props, ctx) {
    onMounted(() => {
      console.log("在组合式api中使用生命周期函数啦！")
    });
    onMounted(() => {
      console.log("这是vue3新特性哦")
    });
    const msgFromApp = inject("message");
    return{
      msgFromApp
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
