import Vue from 'vue'
import Router from 'vue-router'
import Login from './read/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './read/Home.vue')
    },
    {
      path: '/attention',
      name: 'attention',
      component: () => import(/* webpackChunkName: "about" */ './read/Attention.vue')
    },
    {
      path: '/publish',
      name: 'publish',
      component: () => import(/* webpackChunkName: "about" */ './read/Publish.vue')
    },
    {
      path: '/find',
      name: 'find',
      component: () => import(/* webpackChunkName: "about" */ './read/Find.vue')
    },
    {
      path: '/attentionTab',
      name: 'attentionTab',
      component: () => import(/* webpackChunkName: "about" */ './read/AttentionTab.vue')
    }
  ]
})
