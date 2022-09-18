<template>
  <div class="hello">
    <ul>
      <li v-for = "news in newsList" :key="news.id"> {{ news.title}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 data() {
  return {
    newsList: [
      {
        id: 1001,
        title: "台风来了"
      },
      {
        id: 1002,
        title: "疫情再次泛滥"
      },
      {
        id: 1003,
        title: "经济下行压力巨大"
      }
    ]
  }
 }
}
</script>
