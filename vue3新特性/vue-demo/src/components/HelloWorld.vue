<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p1>{{ message }}</p1>
    <button @click="handleClick">点我</button>
    <ul>
      <li v-for="(item, index) in names.list" :key="index">{{ item }}</li>
    </ul>



  </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props, ctx) {

    // setup 中 没有 this
    console.log(props.msg);
    console.log(ctx);
    // ref 可以取代 data 定义
    const message = ref("我是消息");
    const names = reactive({
      list: ["cmq", "fmt"]
    });
    function handleClick() {
      message.value = "我被点击啦";
    }

    return {
      message,
      names,
      handleClick
    };
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
