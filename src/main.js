import { createApp } from 'vue'

import App from './App.vue'
import Dashboard  from './views/DashboardView.vue'
import router from './router'
import store from './store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


createApp(App).use(store).use(router).mount('#app')
