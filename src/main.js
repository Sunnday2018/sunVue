// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/js/plugin/waterfall/jquery.lazyload.min.js';
import './assets/js/plugin/waterfall/blocksit.min.js';
import './assets/js/plugin/rotate/jquery.rotate.js';
import './assets/js/plugin/color/jquery.color.js';

Vue.config.productionTip = false
import './static/css/common/index.css'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    data: {

    },
    methods: {

    },
    components: {
        App
    },
    template: '<App/>'
});
