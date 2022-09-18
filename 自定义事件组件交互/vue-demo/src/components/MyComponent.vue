<template>
    <h3> 自定义事件组件交互 </h3>
    <p> props 用于父组件向子组件传递数据，而自定义事件反之，有点类似 java 的 SPI</p>
    <button @click="sendDataHandle">emit</button>
</template>
<script>
export default {
    name: "MyComponent",
    data() {
        return {
            message: "我是小陈"
        }
    },
    methods: {
        sendDataHandle(){
            // 参数1用于定义事件名
            // 参数2用于传递数据
            this.$emit("onEvent", this.message);
        }
    }
}
</script>
<style></style>