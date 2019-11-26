import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import 'assets/scss/index.scss';
import fastclick from 'fastclick';
import 'swiper/dist/css/swiper.css';
fastclick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});