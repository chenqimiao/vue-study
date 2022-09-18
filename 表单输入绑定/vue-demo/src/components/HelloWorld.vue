<template>
  <div class="hello">
    <input type = "text" v-model ="useranme"/>
    <!-- 转为change事件触发 -->
    <input type = "text" v-model.lzay ="password"/>
    <input type = "text" v-model.trim ="secureKey"/>
    <p>{{ useranme }}</p>
    <p>{{ password }}</p>
    <p>{{ secureKey }}</p>
    <button @click = "clickGetValue(this.username)"> 获取用户名 </button>
    <button @click = "clickGetValue(this.password)"> 获取用户名 </button>
    <button @click = "clickGetValue(this.secureKey)"> 获取安全码 </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      useranme: "",
      password: "",
      secureKey: ""
    }
  },
  methods: {
    clickGetUsername() {
      alert(this.useranme);
    }
  }
}
</script>
