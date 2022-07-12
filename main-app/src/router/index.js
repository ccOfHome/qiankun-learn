import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
import Test from '../views/test.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
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
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        }
    ]
})
