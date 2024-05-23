import { createRouter, createWebHistory } from 'vue-router'
import PaginaPricipal from '../views/PaginaPricipal.vue'
import Produtos from '@/views/Produtos.vue'
import VisualizarProduto from '@/views/VisualizarProduto.vue'
import Administracao from '@/views/Administracao.vue'

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
    },
    {
      path: '/Produtos/:categoria/:id',
      name: 'VizualizarProduto',
      component: VisualizarProduto
    },
    {
      path: '/administracao',
      name: 'Administracao',
      component: Administracao
    }
  ]
})

export default router
