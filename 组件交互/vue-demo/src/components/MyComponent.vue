<template>
    <h3> 组件交互 </h3>
    <p> {{ title }} </p>
    <ul>
        <li v-for="name in names">
            {{ name }}
        </li>
    </ul>

</template>
<script>
 export default {
    name: "MyComponent1",
    props: {
        title: {
            type: String,
            default:""
        },
        names: {
            type: Array,
            // 函数或者数组，依赖函数来进行值传递
            default: function() {
                return [];
            }
        }
    }
 }
</script>
<style></style>