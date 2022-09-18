<template>
  <div class="hello">
    <h3>学习vue: 模版语法</h3>
    <!-- text渲染  -->
     <p>message: {{ message }}</p>
     <div>text: {{ rawHtml }} </div>
     <!-- html 指令渲染 -->
     <div v-html="rawHtml"></div>
     <!-- 动态属性绑定 -->
     <div v-bind:id="dynamicId"></div>
     <!-- 动态属性绑定简写 -->
     <div :id="dynamicId"></div>
     <!-- 运算表达式 -->
     <p> {{ num }} + 1 = {{ num + 1 }} </p>
     <p> {{ ok ? "吃肉" : "出素" }} </p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: "学习vue",
      rawHtml: "<a href= 'https://www.baidu.com'>百度一下</a>",
      dynamicId: 10011,
      num: 1,
      ok: true,
    }
  }
}
</script>

