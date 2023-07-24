/*=========================================================================================
  File Name: index.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters"

import post from "./modules/post"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
  },
  getters
})
