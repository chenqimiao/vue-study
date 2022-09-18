<template>
    <h3>我是单文本组件</h3>
</template>

<script>
export default {
    name: 'MyComponent'
}
</script>

<!-- scoped 代表 css 仅在当前组件生效 -->
<style scoped>
h3 {
    color: red;
}
</style>