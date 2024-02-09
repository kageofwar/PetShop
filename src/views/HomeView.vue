<template>
  <div class="h-screen bg-[#5096B5]">
    <div>
      <div class="flex justify-center items-center text-white h-[41px] bg-[#275BA8]">
        <img src="../assets/icons/Magnetic Card.png" alt="credit card" class="h-[30px] mb-[8px]">
        <p class="p-[10px]">Parcele em até 3x sem juros. Com parecelas a partir de $75.</p>
        <img src="../assets/icons/Magnetic Card.png" alt="credit card" class="h-[30px] mb-[8px]">
      </div>
      <div class="flex justify-center space-x-[70px] items-center h-[100px] bg-white">
        <img src="../assets/PetFuad-removebg.png" alt="logo da loja" class="h-[100px]">
        <div class="flex justify-end w-[60%]">
          <input type="search" name="" id="" placeholder="O que seu Pet precisa?"
            class="text-center bg-[#275BA8] h-[66px] w-[100%] border rounded-[200px] placeholder:text-white">
          <a href="#" class="absolute mr-5"><img src="../assets/icons/Search.png" alt="imagem de lupa"></a>
        </div>
        <div class="flex space-x-6">
          <img src="../assets/icons/Shop.png" alt="shop">
          <img src="../assets/icons/Shopping Cart.png" alt="carrinho">
          <img src="../assets/icons/Phone.png" alt="telefone">
          <img src="../assets/icons/Name.png" alt="perfil">
        </div>
      </div>
    </div>

    <div class="bg-white space-x-11 flex justify-center items-center h-[150px] mt-[20px]">
      <botaoCategoria imageName="DogBone.png" categoriaNome="Cachorros" />
      <botaoCategoria imageName="PawPrints.png" categoriaNome="Gatos" />
      <botaoCategoria imageName="Feather.png" categoriaNome="Pássaros" />
      <botaoCategoria imageName="Fish.png" categoriaNome="Outros Pets" />
      <botaoCategoria imageName="SupplementBottle.png" categoriaNome="Remédios" />
      <botaoCategoria imageName="DogHouse.png" categoriaNome="Casa" />
    </div>
    

  </div>
</template>

<script setup>
import botaoCategoria from '@/components/botaoCategoria.vue';

</script>