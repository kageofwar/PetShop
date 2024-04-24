<template>
  <div class="bg-[--azul-claro]">
    
    <headerPrincipal />
    <headerCategoria />
        <img src="../assets/onda-branca-bottom.png" alt="" class="-translate-y-[79px]">

    <div class="grid grid-cols-2 m-5 2xl:ml-[25vh] 2xl:mr-[25vh] -my-28">
      
      <div class="flex items-center m-[5vh_10vh]">
      
        <div class="">
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
          <div class="bg-white w-[80px] h-[60px] m-3 rounded-[15px]"/>
        </div>
      
        <div>
          <div class="flex justify-center items-center bg-white w-[550px] h-[500px] rounded-[50px]">
              <img :src="produto.img_url" alt="goat">
          </div>
        </div>
      
      </div>

      <div class="flex flex-col items-center mt-[7vh]">
        <p class=" w-[500px] text-[3.5vh] flex text-center">{{ produto.titulo }}</p>
        <div class="flex justify-center text-[2.5vh]">
          <div class="flex space-x-2">
            <p>Avaliação ⭐⭐⭐⭐⭐</p><h2>||</h2><h2 class="text-green-500">Disponível</h2>
          </div>
        </div>
        <a href="#descricao" class="text-gray-500 font-bold"><u>Ver Descrição Completa</u></a>
        <h2 class="text-[5vh] font-semibold mt-5 text-[--azul-escuro]">R${{ produto.valor }}</h2>
        <h2>À vista no PIX com até 10% OFF</h2>
        <button class="bg-[--azul-escuro] w-[25vh] h-[7vh] flex justify-center items-center rounded-3xl text-white font-bold mt-24 text-[3.2vh]">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
import headerPrincipal from '@/components/headerPrincipal.vue';
import headerCategoria from '@/components/headerCategoria.vue'

export default {
    components: {
    headerPrincipal,
    headerCategoria
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