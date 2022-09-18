<template>
  <div class="hello">
    <!-- <h1>{{message}}</h1> -->
    <swiper class="mySwiper" :modules="modules" :pagination="{clickable: true}">
      <swiper-slide>
        <img src="../assets/风景.png" alt=""/>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/人物.png" alt=""/>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/奶茶.png" alt=""/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination'
export default {
  name: 'HelloWorld',
  data() {
    return{
      message: "引入第三方",
      modules: [ Pagination ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
</style>
