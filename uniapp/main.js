import Vue from 'vue'
import App from './App'

import uView from "uview-ui";
Vue.use(uView);

import myRequest from '@/util/http.js'
Vue.prototype.myRequest = myRequest.myRequest;

import api from '@/util/api.js';
Vue.prototype.$api = api;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
