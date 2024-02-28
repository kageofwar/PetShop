<template>
  <div class="h-full bg-[--azul-claro]">
    <div>
      <div class="flex justify-center items-center text-white h-[41px] bg-[--azul-escuro]">
        <img src="../assets/icons/headerIcons/Magnetic Card.png" alt="credit card" class="h-[30px] mb-[8px]">
        <p class="p-[10px]">Parcele em até 3x sem juros. Com parecelas a partir de $75.</p>
        <img src="../assets/icons/headerIcons/Magnetic Card.png" alt="credit card" class="h-[30px] mb-[8px]">
      </div>

      <div class="flex justify-center space-x-[70px] items-center h-[70px] bg-white">
        <img src="../assets/PetFuad-removebg.png" alt="logo da loja" class="h-[100px]">
        <div class="flex justify-end w-[50%]">
          <input type="search" name="" id="" placeholder="O que seu Pet precisa?"
            class="text-center bg-[--azul-escuro] h-[55px] w-[100%] border rounded-[200px] placeholder:text-white">
          <a href="#" class="absolute mr-5 -translate-y-[5px]"><img src="../assets/icons/headerIcons/Search.png"
              alt="imagem de lupa"></a>
        </div>
        <div class="flex space-x-6 h-9" style="list-style: none;">
          <img src="../assets/icons/headerIcons/Shop.png" alt="shop">
          <img src="../assets/icons/headerIcons/Shopping Cart.png" alt="carrinho">

          <div class="">
            <input type="checkbox" id="menu" class="container__botao hidden">
            <label for="menu">
              <img src="../assets/icons/headerIcons/Phone.png" alt="telefone"
                class="h-9 transition ease-in-out delay-150 hover:scale-110 duration-300">
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

    <div class="flex justify-center items-center mt-10">
      <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :navigation="true" :modules="modules" class="mySwiper">
        :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide><img src="../assets/banners/RACOES.gif" class="rounded-full"></swiper-slide>
        <swiper-slide><img src="../assets/banners/BRINQUEDOS.gif" class="rounded-full"></swiper-slide>
        <swiper-slide><img src="../assets/banners/OUTLET.jpg" class="rounded-full"></swiper-slide>
        <swiper-slide><img src="../assets/banners/TAPETES.gif" class="rounded-full"></swiper-slide>
      </swiper>
    </div>

    <div class="mt-16">
      <img src="../assets/Vector.png" alt="">
      <div class="bg-white">
        <div class="flex justify-center -translate-y-20">
          <h2 class="text-[5vh] text-[--azul-claro] ">Seu Pet também pode gostar ❤️</h2>
        </div>

        <div class="grid grid-cols-[40%_60%] justify-items-center">

          <swiper :direction="'vertical'" :pagination="{ clickable: true }" :modules="modules"
            :autoplay="{ delay: 2500, disableOnInteraction: false, }"
            class="h-[60vh] w-[70%] text-[30vh] rounded-3xl sombra cursor-help">
            <swiper-slide class="bg-[#D9D9D9]">
              <div class="h-[100%] flex justify-center items-center">🐵</div>
            </swiper-slide>
            <swiper-slide class="bg-[#D9D9D9]">
              <div class="h-[100%] flex justify-center items-center">🦁</div>
            </swiper-slide>
            <swiper-slide class="bg-[#D9D9D9]">
              <div class="h-[100%] flex justify-center items-center">🦊</div>
            </swiper-slide>
          </swiper>

          <div class="flex flex-col justify-center items-center gap-28">
            <div class="flex w-[90vh] h-[20vh]">
              <swiper :slidesPerView="3" :space-between="115" :modules="modules" :autoplay="{ delay: 2500, disableOnInteraction: false, }" class="swiper-wrapper">
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">1</div></swiper-slide>
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">2</div></swiper-slide>
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">3</div></swiper-slide>
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">4</div></swiper-slide>
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">5</div></swiper-slide>
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">6</div></swiper-slide>
              </swiper>
            </div>

            <div class="flex w-[90vh] h-[20vh] ">
              <swiper :slidesPerView="3" :space-between="115" :modules="modules" :autoplay="{ delay: 2500, disableOnInteraction: false, }" class="swiper-wrapper">
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">1</div></swiper-slide>
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">2</div></swiper-slide>
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">3</div></swiper-slide>
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">4</div></swiper-slide>
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">5</div></swiper-slide>
                <swiper-slide><div class="flex w-[20vh] h-[20vh] bg-[#D9D9D9] justify-center items-center rounded-3xl">6</div></swiper-slide>
              </swiper>
            </div>

          </div>
        </div>

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
            <botaoRecomendacao nomeDaImagem="Timetable.png" RecomendacaoTitulo="Compra Programada" />
            <botaoRecomendacao nomeDaImagem="Discount.png" RecomendacaoTitulo="Ofertas Exclusivas" />
            <botaoRecomendacao nomeDaImagem="Shop.png" RecomendacaoTitulo="Conheça nossas lojas" />
            <botaoRecomendacao nomeDaImagem="Barbershop.png" RecomendacaoTitulo="Serviço de tosa" />
            <botaoRecomendacao nomeDaImagem="WhatsApp.png" RecomendacaoTitulo="WhatsApp" />
            <botaoRecomendacao nomeDaImagem="Instagram.png" RecomendacaoTitulo="Instagram" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import botaoCategoria from '@/components/botaoCategoria.vue';
import botaoRecomendacao from '@/components/botaoRecomendacao.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
    botaoCategoria,
    botaoRecomendacao
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  }
};

</script>

<style>.lista-menu {
  display: none;
}

.container__botao:checked~.lista-menu {
  display: block;
}

.container__botao:hover~.lista-menu {
  display: block;
}

.swiper-button-prev, .swiper-button-next {

}
</style>