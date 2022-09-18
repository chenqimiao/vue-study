import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter:10
  },
  getters: {
    getCounter(state) {
      return state.counter > 0 ? state.counter : "数据异常";
    }
  },
  mutations: {
    incCounter(state){
      state.counter++;
    },
    addCounter(state, num){
      state.counter += num;
    }
  },
  actions: {
    // 比起mutations，可以进行异步操作
    asyncAddCounter({commit}) {
      axios.get("/").then(res => {
        if (res.status === 200)
        commit("addCounter", 200);
      });
    }
  },
  modules: {
  }
})
