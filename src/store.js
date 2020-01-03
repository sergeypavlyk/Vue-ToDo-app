import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    deletedItem: false,
  },

  getters: {
    deletedItem: state =>  {
      return state.deletedItem;
    },
  },

  mutations: {
    removeItem: state => {
      state.deletedItem = true;
    },
  }
})