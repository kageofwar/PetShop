import { createRouter, createWebHistory } from 'vue-router'
import PaginaPricipal from '../views/PaginaPricipal.vue'
import Produtos from '@/views/Produtos.vue'
import VisualizarProduto from '@/views/VisualizarProduto.vue'
import Login from '@/views/Administração/Login.vue'
import Opcoes from '@/views/Administração/Opcoes.vue'
import PainelProdutos from '@/views/Administração/PainelProdutos.vue'

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
      path: '/administracao/login',
      name: 'Login_Administracao',
      component: Login
    },
    {
      path: '/administracao/opcoes',
      name: 'Opcoes',
      component: Opcoes 
    },
    {
      path: '/administracao/opcoes/painel_produtos',
      name: 'PainelProdutos',
      component: PainelProdutos 
    }
  ]
})

export default router
