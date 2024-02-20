<template>
  <div class="h-full bg-[#5096B5]">
    <div>
      <div class="flex justify-center items-center text-white h-[41px] bg-[#275BA8]">
        <img src="../assets/icons/headerIcons/Magnetic Card.png" alt="credit card" class="h-[30px] mb-[8px]">
        <p class="p-[10px]">Parcele em até 3x sem juros. Com parecelas a partir de $75.</p>
        <img src="../assets/icons/headerIcons/Magnetic Card.png" alt="credit card" class="h-[30px] mb-[8px]">
      </div>

      <div class="flex justify-center space-x-[70px] items-center h-[70px] bg-white">
        <img src="../assets/PetFuad-removebg.png" alt="logo da loja" class="h-[100px]">
        <div class="flex justify-end w-[50%]">
          <input type="search" name="" id="" placeholder="O que seu Pet precisa?"
            class="text-center bg-[#275BA8] h-[55px] w-[100%] border rounded-[200px] placeholder:text-white">
          <a href="#" class="absolute mr-5"><img src="../assets/icons/headerIcons/Search.png" alt="imagem de lupa"></a>
        </div>
        <div class="flex space-x-6 h-9">
          <img src="../assets/icons/headerIcons/Shop.png" alt="shop">
          <img src="../assets/icons/headerIcons/Shopping Cart.png" alt="carrinho">
          <img src="../assets/icons/headerIcons/Phone.png" alt="telefone">
          <img src="../assets/icons/headerIcons/Name.png" alt="perfil">
        </div>
      </div>
    </div>


    <div class="bg-white space-x-11 flex justify-center items-center h-[100px] mt-[20px]">
      <botaoCategoria imageName="DogBone.png" categoriaNome="Cachorros" />
      <botaoCategoria imageName="PawPrints.png" categoriaNome="Gatos" />
      <botaoCategoria imageName="Feather.png" categoriaNome="Pássaros" />
      <botaoCategoria imageName="Fish.png" categoriaNome="Outros Pets" />
      <botaoCategoria imageName="SupplementBottle.png" categoriaNome="Remédios" />
      <botaoCategoria imageName="DogHouse.png" categoriaNome="Casa" />
    </div>

    <div class="flex justify-center mt-10">

      <div class="carousel w-full">
        <div id="slide3" class="carousel-item flex justify-center items-center space-x-4 w-full">
          <a href="#slide2" class="btn btn-circle bg-transparent border-white text-white">❮</a>
          <img src="../assets/banners/RACOES.gif" class="w-[90%] rounded-[75px]" />
          <a href="#slide4" class="btn btn-circle bg-transparent border-white text-white">❯</a>
        </div>
        <div id="slide1" class="carousel-item flex justify-center items-center space-x-4 w-full ">
          <a href="#slide4" class="btn btn-circle bg-transparent border-white text-white">❮</a>
          <img src="../assets/banners/BRINQUEDOS.gif" class="w-[90%] rounded-[75px]" />
          <a href="#slide2" class="btn btn-circle bg-transparent border-white text-white">❯</a>
        </div>
        <div id="slide2" class="carousel-item flex justify-center items-center space-x-4 w-full">
          <a href="#slide1" class="btn btn-circle bg-transparent border-white text-white">❮</a>
          <img src="../assets/banners/OUTLET.jpg" class="w-[90%] rounded-[75px]" />
          <a href="#slide3" class="btn btn-circle bg-transparent border-white text-white">❯</a>
        </div>
        <div id="slide4" class="carousel-item flex justify-center items-center space-x-4 w-full">
          <a href="#slide3" class="btn btn-circle bg-transparent border-white text-white">❮</a>
          <img src="../assets/banners/TAPETES.gif" class="w-[90%] rounded-[75px]" />
          <a href="#slide1" class="btn btn-circle bg-transparent border-white text-white">❯</a>
        </div>

      </div>

    </div>

    <div class="mt-16">
      <img src="../assets/Vector.png" alt="">
      <div class="bg-white">
        <div class="flex justify-center -translate-y-20">
          <h2 class="text-[5vh] text-[#5096B5]">Seu Pet também pode gostar ❤️</h2>
        </div>

        <!--<div class="mt-20">
          <h2 class="text-[3vh] text-[#5096B5] ml-28 mb-5">Cachorros</h2>
          <div class="grid grid-cols-4 justify-items-center">
            <CardRecomendacao nomeProduto="Ração Vital Pro Pedigree 1kg" valor="99,00" imagemProduto="pedrigre.png" />
            <CardRecomendacao nomeProduto="Ração Vital Pro Pedigree 1kg" valor="99,00" imagemProduto="pedrigre.png" />
            <CardRecomendacao nomeProduto="Ração Vital Pro Pedigree 1kg" valor="99,00" imagemProduto="pedrigre.png" />
            <CardRecomendacao nomeProduto="Ração Vital Pro Pedigree 1kg" valor="99,00" imagemProduto="pedrigre.png" />
          </div>
        </div>

        <div class="mt-20">
          <h2 class="text-[3vh] text-[#5096B5] ml-28 mb-5">Gatos</h2>
          <div class="grid grid-cols-4 justify-items-center">
            <CardRecomendacao nomeProduto="Ração Whiskas Carne 10kg" valor="99,00" imagemProduto="whiskas.webp" />
            <CardRecomendacao nomeProduto="Ração Whiskas Carne 10kg" valor="99,00" imagemProduto="whiskas.webp" />
            <CardRecomendacao nomeProduto="Ração Whiskas Carne 10kg" valor="99,00" imagemProduto="whiskas.webp" />
            <CardRecomendacao nomeProduto="Ração Whiskas Carne 10kg" valor="99,00" imagemProduto="whiskas.webp" />
          </div>
        </div>-->
      </div>
      <img src="../assets/Vector (1).png" alt="" class="-translate-y-[1px]">

    </div>

    <div class="flex justify-center">
      <div class="w-[80%]">
        <h2 class="text-white text-[5vh] m-5">Pet Shop Online Pet Fuad</h2>
        <div class="border rounded-t-[50px] rounded-bl-[50px] rounded p-5 text-white">
          <div class="flex">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius numquam delectus, architecto quis fugit
              itaque, possimus distinctio exercitationem error a magni. Fugit mollitia officia ipsum nesciunt quas
              consequatur temporibus doloribus!</p>
            <img src="../assets/Pets.png" alt="" class="h-[12vh]">
          </div>
          <div class="grid grid-cols-6 justify-items-center items-center">
            <botaoRecomendacao nomeDaImagem="Timetable.png" RecomendacaoTitulo="Compra Programada"/>
            <botaoRecomendacao nomeDaImagem="Discount.png" RecomendacaoTitulo="Ofertas Exclusivas"/>
            <botaoRecomendacao nomeDaImagem="Shop.png" RecomendacaoTitulo="Conheça nossas lojas"/>
            <botaoRecomendacao nomeDaImagem="Barbershop.png" RecomendacaoTitulo="Serviço de tosa"/>
            <botaoRecomendacao nomeDaImagem="WhatsApp.png" RecomendacaoTitulo="WhatsApp"/>
            <botaoRecomendacao nomeDaImagem="Instagram.png" RecomendacaoTitulo="Instagram"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import botaoCategoria from '@/components/botaoCategoria.vue';
import CardRecomendacao from '@/components/CardRecomendacao.vue'
import botaoRecomendacao from '@/components/botaoRecomendacao.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentSlide = ref(1);
const intervalId = ref(null);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value % 4) + 1;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 2 + 4) % 4 + 1;
};

onMounted(() => {
  intervalId.value = setInterval(() => {
    nextSlide();
  }, 3000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId.value);
});
</script>