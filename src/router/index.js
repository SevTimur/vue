import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../App.vue'
import ProductRow from '../components/ProductRow.vue'
import Advantages from '../components/Advantages.vue'
import FavoriteRow from '../components/FavoriteRow.vue'
import Product from '../components/Product.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ProductRow
  },
  {
    path: '/ProductRow',
    component: ProductRow
  },
  {
    path: '/Advantages',
    component: Advantages
  },
  {
    path: '/Favorite',
    component: FavoriteRow
  },
  {
    path: '/Product',
    component: Product
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
