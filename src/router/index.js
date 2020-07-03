import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  function authGuard(to, from, next) {
    try{
      var token = JSON.parse(atob(localStorage.getItem("token")))
      if(token.access_token && token){
        next();
      }else{
        next({name: "Login"})
      } 

    }catch(error){
      localStorage.clear()
      next({name: "Login"})
    }
    
  }

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/publicacion',
    name: 'Publicacion',
    component: () => import(/* webpackChunkName: "publicacion" */ '../views/Publicacion.vue'),
    beforeEnter: authGuard
  
  },
  {
    path: '/ingresar',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Admin.vue'),
    beforeEnter: authGuard
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(from);
  next();
})

export default router
