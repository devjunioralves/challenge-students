import Vue from 'vue';
import Vuex from 'vuex';
import students from './modules/Students.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    students,
  }
});

export default store;