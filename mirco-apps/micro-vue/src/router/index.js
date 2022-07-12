import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue' : '/',
    linkActiveClass: 'selected',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        }
    ]
})
