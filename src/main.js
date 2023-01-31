import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from '@/router/index'



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

Vue.use(VueRouter)


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (token === null) {
    if (to.path === '/login') {
        // console.log('already in login page')
        next()
    } else {
        router.push('/login')
        next()
    }
} else {
    if (to.path === '/login' ) {
            router.push('/overview')
            next()
    } else if(to.path === '/' ) {
        router.push('/overview')
        next()
    }
    next()
}
})

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// App