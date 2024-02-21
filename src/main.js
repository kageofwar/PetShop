import './assets/main.css'
import 'swiper/css';

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import Swiper from 'swiper';


const app = createApp(App)

app.use(router);
app.mount('#app');
