<template>
  <div class="hello">
    <!-- 操作dom的条件渲染 切换开销大-->
    <p v-if="flag"> 吃肉 </p>
    <p v-else> 吃素 </p>
    <!-- 操作css的条件渲染 初始开销大-->
    <p v-show="flag"> 真吃肉 </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      flag:true
    }
  }
}
</script>