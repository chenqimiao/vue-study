<template>
    <h3>组件生命周期</h3>
    <p> {{message}}</p>
    <button @click="this.message = '为什么点我？'">点我</button>
</template>

<script>
    export default {
        data() {
            return {
                message: ""
            }
        },
        beforeCreate() {
            console.log("beforeCreate： 组件创建之前");
        },
        created() {
            console.log("created: 组件创建完成");
        },
        beforeMount() {
            console.log("beforeMount: 组件挂载渲染之前");
        },
        mounted() {
            console.log("mounted: 组件渲染完成");
            // 进行网络请求
        },
        beforeUpdate() {
            console.log("beforeUpdate: 组件更新之前");
        },
        updated() {
            console.log("updated: 组件更新完成");
        },
        beforeUnmount() {
            console.log("beforeUnmount: 组件卸载之前");
            // 消耗性能的处理移除，比如定时器
        },
        unmounted() {
            console.log("unmounted: 组件卸载完成");
        }

    }
</script>