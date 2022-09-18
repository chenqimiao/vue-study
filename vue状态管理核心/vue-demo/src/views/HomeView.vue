<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>home</h3>
    <p> counter = {{ $store.getters.getCounter}}</p>
    <p> counter = {{ getCounter }}</p>

    <button @click="handleInc">inc</button>

    <button @click="handleAddCounter">addCounter</button>

    <button @click="handleAsyncAddCounter">asyncAddCounter</button>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
export default {
  name: 'HomeView',
  computed: {
    ...mapGetters(["getCounter"]),
  },
  methods: {
    ...mapMutations(["addCounter"]),
    handleInc(){
      this.$store.commit("incCounter");
    },
    handleAddCounter(){
      this.$store.commit("addCounter", 5);
      this.addCounter(5);
    },
    ...mapActions(["asyncAddCounter"]),
    handleAsyncAddCounter(){
      this.$store.dispatch("asyncAddCounter");
      this.asyncAddCounter();
    }
  }
}
</script>
