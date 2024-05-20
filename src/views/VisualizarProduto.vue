<template>
  <div class="bg-[--azul-claro]">

    <headerPrincipal />
    <headerCategoria />

    <div class="flex justify-center items-center">
      <div class="grid grid-cols-2 bg-white items-center mb-1 mt-1 w-[80%] rounded-t-xl">
        <div>
          <div class="pl-28">
            <div class="grid grid-cols-3 divide-x-2">
              <div class="w-[100%] flex justify-center items-center">
                <img src="../assets/logoMarcas/pedigree-logo-6.png" alt="logo da marca" class="h-10">
              </div>
              <div class="text-[4vh] w-[100%] flex items-center justify-center">
                🐶
              </div>
              <div class="w-[100%] flex items-center justify-center">
                <img src="../assets/icons/compartilhar.svg" alt="" class="h-10">
                <img src="../assets/icons/coracao-favorito.svg" alt="" class="h-10">
              </div>
            </div>
          </div>

          <div class="grid grid-cols-[15%_85%]">
            <div class="flex flex-col items-center">
                <div class="flex justify-center items-center">
                  <img src="../assets/icons/seta.svg" alt="" class="h-10 cursor-pointer">
                </div>
                <div class="bg-white border-[2px] w-[80px] h-[60px] m-1 rounded-[10px]" />
                <div class="bg-white border-[2px] w-[80px] h-[60px] m-1 rounded-[10px]" />
                <div class="bg-white border-[2px] w-[80px] h-[60px] m-1 rounded-[10px]" />
                <div class="bg-white border-[2px] w-[80px] h-[60px] m-1 rounded-[10px]" />
                <div class="bg-white border-[2px] w-[80px] h-[60px] m-1 rounded-[10px]" />
                <div class="bg-white border-[2px] w-[80px] h-[60px] m-1 rounded-[10px]" />
                <div class="flex items-center justify-center">
                  <img src="../assets/icons/seta.svg" alt="" class="h-10 rotate-180 cursor-pointer">
                </div>
            </div>

            <div class="flex justify-center items-center">
              <img :src="produto.img_url" alt="imagem do produto" class="h-[50vh]">
            </div>
          </div>
        </div>

        <div>
          <div class="flex flex-col  bg-white rounded-[20px] h-[46vh] p-5">
            <p class=" w-[500px] text-[3.5vh] flex">{{ produto.titulo }}</p>
            <div class="flex text-[2.5vh]">
              <div class="flex space-x-2">
                <p class="">Avaliação ⭐⭐⭐⭐⭐</p>
                <h2>||</h2>
                <h2 class="text-green-500">Disponível</h2>
              </div>
            </div>
            <a href="#descricao" class="font-bold text-gray-300"><u>Ver Descrição Completa</u></a>
            <div class="grid grid-cols-2 items-center">
              <h2 class="text-[4vh] font-semibold mt-5 ">R${{ produto.valor }}</h2>
              <button class="bg-[--azul-escuro] w-[25vh] h-[7vh] flex justify-center items-center rounded-3xl text-white font-bold text-[3.2vh] mt-[4vh]">Comprar</button>
            </div>
            <h2 class="mb-10">À vista no PIX com até 10% OFF</h2>
            <produtosSimilares />
          </div>
        </div>

        <div class="flex items-center mt-1 bg-white rounded-[20px] p-1 h-[13vh]">
          <div class="flex items-center text-[2.1vh] ml-5 space-x-4">
              <img src="../assets/icons/Truck.png" class="h-[6vh]">
              <h2>Frete e Prazo: </h2>
              <input type="text" class="flex p-2 justify-center text-center items-center border-[1px] border-black rounded-full placeholder:text-center" placeholder="Digite seu CEP">
              <button class="bg-[--azul-escuro] w-[20vh] h-[5vh] flex justify-center items-center rounded-3xl text-white">Calcular</button>
          </div>
        </div>
      </div>
    </div>


    <div class="flex justify-center items-center">
      <div class="w-[145vh]">
        <div class="grid grid-cols-[35%_65%] mt-1 justify-items-center space-x-1">
          
          <fichaTecnica :porte="produto.porte" :idade="produto.idade" :racas="produto.racas"
            :quantidade="produto.quantidade" :sabor="produto.sabor" :pet="produto.categoria" :marca="produto.marca" />
          
          <descricaoProduto :descricao="produto.descricao" :ingredientes="produto.ingredientes" />

        </div>
      </div>
    </div>

    <footerPrincipal />
  </div>
</template>

<script>
  import headerPrincipal from '@/components/headerPrincipal.vue';
  import headerCategoria from '@/components/headerCategoria.vue'
  import Produto from '@/components/Auxiliar/produtosAux/produto.vue'
  import fichaTecnica from '@/components/Auxiliar/visualizarProdutoAux/fichaTecnica.vue'
  import descricaoProduto from '@/components/Auxiliar/visualizarProdutoAux/descricaoProduto.vue'
  import footerPrincipal from '@/components/footerPrincipal.vue'
  import produtosSimilares from '@/components/Auxiliar/visualizarProdutoAux/produtosSimilares.vue'


  export default {
    components: {
      headerPrincipal,
      headerCategoria,
      Produto,
      fichaTecnica,
      descricaoProduto,
      footerPrincipal,
      produtosSimilares
    },
    data() {
      return {
        idProduto: this.$route.params.id,
        produto: {}
      }
    },
    mounted() {
      fetch('http://127.0.0.1:8000/api/produtos/' + this.idProduto)
        .then(api => api.json())
        .then(data => { this.produto = data.data });
    }
  }
</script>