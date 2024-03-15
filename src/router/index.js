import { createRouter, createWebHistory } from 'vue-router'
import PaginaPricipal from '../views/PaginaPricipal.vue'
import Produtos from '@/views/Produtos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: PaginaPricipal
    },
    {
      path: '/Produtos/:rota',
      name: 'Produtos',
      component: Produtos
    }
  ]
})

export default router
