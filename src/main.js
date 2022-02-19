import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import App from './App.vue';
  

const app = createApp(App)
app.use(VueAxios, axios, router)
app.mount('#app');


