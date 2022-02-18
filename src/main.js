import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

import VueAxios from 'vue-axios';
// import router from "./router"
// import "bootstrap-vue/dist/bootstrap-vue.css"
// import BootstrapVue from "bootstrap-vue"

// use(BootstrapVue)
createApp(App).use(VueAxios, axios).mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
