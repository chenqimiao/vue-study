<template>
  <div class="hello">
    <h3>网络请求封装</h3>
    <p></p>
  </div>
</template>

<script>
import api from "../api/index"
export default {
  name: 'HelloWorld',

  mounted(){
    api.getPersonBlog().then(res => {
      console.log(res.data);
    })
  }

}

</script>
