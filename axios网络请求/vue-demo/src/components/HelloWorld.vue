<template>
  <div class="hello">
    <h3> 网络请求</h3>
    <p>
      {{ getResposne }}
    </p>
  </div>
</template>

<script>
import { thisTypeAnnotation } from '@babel/types';
// 局部挂载
// import axios from 'axios'
import queryString from 'querystring';
export default {
  name: 'HelloWorld',
  data() {
    return {
      getResposne: "",
    }
  },
  mounted() {

    var entry = {
        user_id:"chenqimiao",
        github:"https://github.com/chenqimiao"
    };
  //  局部挂载
  //   // get 请求
  //   this.axios({
  //     method:"get",
  //     url:"https://a2put.chinaz.com/slot/callback?id=s1696814254029491&fromUrl=https://whois.chinaz.com/12321.com"
  //   }).then(res => {
  //     console.log(res.data);
  //     this.getResposne = res.data.data.ads[0].click_url;
  //   });
  //   // post 请求，表单形式提交数据
  //   // 序列化形式,表单形式
  //   console.log(queryString.stringify(entry));
  //   axios({
  //     method:"post",
  //     url:"https://a2put.chinaz.com/slot/callback?id=s1696814254029491&fromUrl=https://whois.chinaz.com/12321.com",
  //     data: queryString.stringify(entry)
  //   }).then(res => {
  //     console.log("request entry is formdata and response is " + JSON.stringify(res.data));
  //   });

  //   // post 请求，json形式提交数据
  //   axios({
  //     method:"post",
  //     url:"https://a2put.chinaz.com/slot/callback?id=s1696814254029491&fromUrl=https://whois.chinaz.com/12321.com",
  //     data: entry,
  //   }).then(res => {
  //     console.log("request entry is json and response is " + JSON.stringify(res.data));
  //   });

  //   // get 快捷方式
  //   axios.get("https://a2put.chinaz.com/slot/callback?id=s1696814254029491&fromUrl=https://whois.chinaz.com/12321.com")
  //   .then(res => {
  //     console.log(res.data);
  //   });

  //   // post 快捷方式
  //   axios.post("https://a2put.chinaz.com/slot/callback?id=s1696814254029491&fromUrl=https://whois.chinaz.com/12321.com", entry)
  //   .then(res => {
  //     console.log(res.data)
  //   })

   // 全局挂载后使用
    this.$axios.post("https://a2put.chinaz.com/slot/callback?id=s1696814254029491&fromUrl=https://whois.chinaz.com/12321.com", entry)
    .then(res => {
      console.log(res.data)
    })

   },

  



  
  
}
</script>