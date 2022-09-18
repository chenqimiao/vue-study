<template>
  <div class="hello">
  <button @click="counter += 1" >点击: counter = {{counter}} </button>
  <button v-on:click="counter += 1" >点击: counter = {{counter}} </button>
  <button @click="clickHandle" > 按钮 </button>
  <p> {{message}} </p>
  <button @click="say('hi')" > say hi </button>
  <button @click="say('hello')" > say hello </button>
  <ul>
      <li @click= "clickItemHandle(news.title)" v-for = "news in newsList" :key="news.id"> {{ news.title}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      counter: 1,
      message: "傻了吧",
      newsList: [
        {
          id: 1001,
          title: "经济下行"
        },
        {
          id: 1002,
          title: "疫情再次泛滥"
        },
        {
          id: 1003,
          title: "经济下行压力巨大"
        }
      ]
    }
  },
  methods: {
    clickHandle(event) {
      console.log("为啥点我？");
      // 读取data中的属性，是需要用this指针的
      this.message = "消息被撤回了"
      console.log(event);
      event.target.innerHTML = "已经点过啦";
    },
    say(data) {
      alert(data);
    },
    clickItemHandle(data, event) {
      alert(data);
    }
  }
}
</script>