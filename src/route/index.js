import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../components/Home.vue'
import About from './../components/About.vue'
import ToDo from './../components/ToDo'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/ToDo', component: ToDo }
  ]
})
