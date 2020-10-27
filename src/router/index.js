import Vue from 'vue'
import Router from 'vue-router'

import HOME from '../components/home/home.vue'
import CATEGORY from '../components/category/category.vue'
import CART from '../components/cart/cart.vue'
import PROFILE from '../components/profile/profile.vue'




Vue.use(Router)

export default new Router({
    routes:[
      {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        component: HOME
      },
      {
        path:'/category',
        component: CATEGORY
      },
      {
        path:'/cart',
        component: CART
      },
      {
        path:'/profile',
        component: PROFILE
      }
      
      
    ],
    mode:"history"
    
 })

 