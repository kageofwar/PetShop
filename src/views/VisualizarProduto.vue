<template>
  <div class="bg-[--azul-claro]">

    <headerPrincipal />
    <headerCategoria />

    <!-- Container para vizualizar produto -->
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

    <!-- Container para informações do produto -->
    <div class="flex justify-center">
      <div class="bg-white w-[80%] grid grid-cols-[38%_62%] h-[70vh]">
        
        <div class="flex justify-center items-center my-10"> <!-- Ficha Tecnica -->
          <div class="flex flex-col w-[80%] border-[2px] border-black rounded-lg">
              <div class="flex items-center justify-center">
                <img src="../assets/icons/Paste.png" class="h-12">
                <h2 class="text-[2.5vh] p-5">Ficha Tecnica</h2>
              </div>
              <div class="[&>*]:grid [&>*]:grid-cols-[25%_75%] [&>*]:items-center [&>*]:p-4 text-[1.8vh] text-center divide-y-[1px] divide-black break-words">
                <div class="bg-blue-300"><h2>Porte</h2><h2>{{ produto.porte }}</h2></div>
                <div class="bg-gray-200"><h2>Idade</h2><h2>{{ produto.idade }}</h2></div>
                <div class="bg-blue-300"><h2>Raças</h2><h2>{{ produto.racas }}</h2></div>
                <div class="bg-gray-200"><h2>Quantidade</h2><h2>{{ produto.quantidade }}</h2></div>
                <div class="bg-blue-300"><h2>Sabor</h2><h2>{{ produto.sabor }}</h2></div>
                <div class="bg-gray-200"><h2>Pet</h2><h2>{{ produto.categoria }}</h2></div>
                <div class="bg-blue-300 rounded-b-[5px]"><h2>Marca</h2><h2>{{ produto.marca }}</h2></div>
              </div>
          </div>
        </div>

        <div class="flex justify-center items-center">
          <div class=" rounded-[15px] h-[65vh] overflow-hidden"> <!-- Descrição do Produto -->
            <div class="flex items-center justify-center text-[3vh] font-semibold">
              <img src="../assets/icons/MoreDetails.png" class="h-10 mt-1">
              <h2>Detalhes do Produto</h2>
            </div>
            <div class="break-words h-[65vh] pr-3 overflow-auto">
              <div class="flex items-center space-x-2 p-3"><h2 class="text-[2.5vh]">Descrição</h2><img src="../assets/icons/felcha_com_curva.svg" class="h-6 scale-x-[-1] rotate-90 mt-3"></div>
              <p>{{ produto.descricao }}</p>
              <div class="flex items-center space-x-2 p-3"><h2 class="text-[2.5vh]">Ingerdientes</h2><img src="../assets/icons/felcha_com_curva.svg" class="h-6 scale-x-[-1] rotate-90 mt-3"></div>
                <p>{{ produto.ingredientes }}</p>        
            </div>
          </div>
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

<style scoped>
*::-webkit-scrollbar {
  width: 10px;               /* width of the entire scrollbar */
}

*::-webkit-scrollbar-track {
  background: white;        /* color of the tracking area */
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(194, 196, 200);    /* color of the scroll thumb */
  border-radius: 50px;       /* roundness of the scroll thumb */
  border: 4px solid white;  /* creates padding around scroll thumb */
}
</style>