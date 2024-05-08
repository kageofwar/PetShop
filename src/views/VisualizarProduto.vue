<template>
  <div class="bg-[--azul-claro]">
    
    <headerPrincipal />
    <headerCategoria />

    <div class="flex m-5 2xl:ml-48 2xl:space-x-36">
      
      <div class="flex items-center ml-[9vh]">

        <div class="">
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
        </div>
        
        <div>
          <div class="flex justify-center items-center bg-white w-[550px] h-[60vh] rounded-[50px] ">
              <img :src="produto.img_url" alt="goat">
          </div>
        </div>

      </div>

      <div class="ml-7">

        <div class="flex flex-col items-center bg-white rounded-[50px] h-[46vh] p-5">
          <p class=" w-[500px] text-[3.5vh] flex text-center">{{ produto.titulo }}</p>
          <div class="flex justify-center text-[2.5vh]">
            <div class="flex space-x-2">
              <p class="">Avaliação ⭐⭐⭐⭐⭐</p><h2>||</h2><h2 class="text-green-500">Disponível</h2>
            </div>
          </div>
          <a href="#descricao" class="font-bold text-gray-300"><u>Ver Descrição Completa</u></a>
          <h2 class="text-[5vh] font-semibold mt-5 ">R${{ produto.valor }}</h2>
          <h2 class="">À vista no PIX com até 10% OFF</h2>
          <button class="bg-[--azul-escuro] w-[25vh] h-[7vh] flex justify-center items-center rounded-3xl text-white font-bold text-[3.2vh] mt-[4vh]">Comprar</button>
        </div>
      
        <div class="flex items-center mt-[2vh] bg-white rounded-[50px] p-1 h-[13vh]">
          <div class="ml-5">
            <div class="flex items-center text-black text-[3vh] space-x-2">
              <img src="../assets/icons/Truck.png" class="h-[5vh]">
              <h2>Frete e Prazo: </h2>
            </div>
            <div class="flex space-x-8">
              <input type="text" class="flex justify-center items-center border-[1px] border-black rounded-full placeholder:text-center" placeholder="Digite seu CEP">
              <button class="bg-[--azul-escuro] w-[20vh] h-[5vh] flex justify-center items-center rounded-3xl text-white text-[3.2vh]">Calcular</button>
            </div>
            </div>
        </div>
      </div>
    </div>
    
    <div class="flex flex-col bg-white items-center justify-center rounded-[30px] p-5">
      <div class="flex items-center text-[4vh]"><h2>Produtos similares</h2><img src="../assets/icons/PriceTag.png" class="h-10"></div>
      <div class="flex space-x-16 mt-3 text-black">
        <Produto :produtoImagem="produto.img_url" texto="Produto similar 1" valor="99,00" />
        <Produto :produtoImagem="produto.img_url" texto="Produto similar 2" valor="99,00" />
        <Produto :produtoImagem="produto.img_url" texto="Produto similar 3" valor="99,00" />
        <Produto :produtoImagem="produto.img_url" texto="Produto similar 4" valor="99,00" />
      </div>
    </div>

    <div class="grid grid-cols-[35%_65%] mt-4 justify-items-center">
      <fichaTecnica :porte="produto.porte" :idade="produto.idade" :racas="produto.racas" :quantidade="produto.quantidade" :sabor="produto.sabor" :pet="produto.categoria" :marca="produto.marca"/>
      <descricaoProduto :descricao="produto.descricao" :ingredientes="produto.ingredientes"/>
    </div>

  </div>
</template>

<script>
import headerPrincipal from '@/components/headerPrincipal.vue';
import headerCategoria from '@/components/headerCategoria.vue'
import Produto from '@/components/Auxiliar/produtosAux/produto.vue'
import fichaTecnica from '@/components/Auxiliar/visualizarProdutoAux/fichaTecnica.vue'
import descricaoProduto from '@/components/Auxiliar/visualizarProdutoAux/descricaoProduto.vue'

export default {
    components: {
    headerPrincipal,
    headerCategoria,
    Produto,
    fichaTecnica,
    descricaoProduto
  },
  data(){
    return {
        idProduto: this.$route.params.id,
        produto: {},
    }
  },
  mounted() {
    fetch('http://127.0.0.1:8000/api/produtos/'+this.idProduto)
            .then(api => api.json())
            .then(data => {this.produto = data.data});
  }
}
</script>