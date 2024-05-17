<template>
  <div class="z-40">
    <div class="header_pesquisar flex justify-center space-x-[70px] items-center h-[70px] fixed bg-white w-[100%] z-50">
      <router-link to="/"><img src="../assets/PetFuad-removebg.png" alt="logo da loja" class="h-[100px] cursor-pointer transition ease-in-out hover:scale-110 duration-300"></router-link>
      <div class="flex justify-end w-[50%]">
        <input type="search" name="" id="" placeholder="O que seu Pet precisa?"
          class="text-center bg-[--azul-escuro] h-[55px] w-[100%] border rounded-[200px] placeholder:text-white text-white">
        <a href="#" class="absolute mr-5 translate-y-[2px]"><img src="../assets/icons/headerIcons/Search.png"
            alt="imagem de lupa" class="h-[6vh]"></a>
      </div>
      <div class="flex space-x-6 h-9" style="list-style: none;">
        <img src="../assets/icons/headerIcons/Shop.png" alt="shop" class="transition ease-in-out delay-0 hover:scale-110 duration-300">
        <img src="../assets/icons/headerIcons/Shopping Cart.png" alt="carrinho" class="transition ease-in-out delay-0 hover:scale-110 duration-300">

        <div class="">
          <input type="checkbox" id="menu" class="container__botao hidden">
          <label for="menu">
            <img src="../assets/icons/headerIcons/Phone.png" alt="telefone"
              class="h-9 transition ease-in-out delay-0 hover:scale-110 duration-300">
          </label>
          <div class="lista-menu flex justify-center">
            <div
              class="flex flex-col justify-center items-center absolute bg-white w-[40vh] -translate-x-44 translate-y-2 h-[15vh] rounded-2xl sombra">
              <h2 class="text-[25px] text-[--azul-escuro]">Telefones</h2>
              <h2 class="text-[20px] text-black">(11) 9 9999-9999</h2>
              <h2 class="text-[20px] text-black">(11) 9 9999-9999</h2>
            </div>
          </div>
        </div>
        <img src="../assets/icons/headerIcons/Name.png" alt="perfil" class="transition ease-in-out delay-0 hover:scale-110 duration-300">
      </div>
    </div>
    <div class="h-[70px]"></div>
  </div>
</template>

<script>
import botaoCategoria from '@/components/Auxiliar/headerAux/botaoCategoria.vue';

export default {
  components: {
    botaoCategoria
  }
}
</script>