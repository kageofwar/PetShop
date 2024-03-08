<template>
  <div class="h-full bg-[--azul-claro]">

    <headerPrincipal />

    <div class="header_parcele flex justify-center items-center text-white h-[30px] bg-[--azul-escuro] text-[1.6vh]">
      <img src="../assets/icons/headerIcons/Magnetic Card.png" alt="credit card" class="h-[30px] mb-[8px]">
      <p class="p-[10px]">Parcele em até 3x sem juros. Com parecelas a partir de $75.</p>
      <img src="../assets/icons/headerIcons/Magnetic Card.png" alt="credit card" class="h-[30px] mb-[8px]">
    </div>

    <div class="flex justify-center items-center mt-10">
      <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :navigation="true" :modules="modules" class="mySwiper"
        :autoplay="{ delay: 2500, disableOnInteraction: false, }">
        <swiper-slide><img src="../assets/banners/RACOES.gif" class="rounded-full"></swiper-slide>
        <swiper-slide><img src="../assets/banners/BRINQUEDOS.gif" class="rounded-full"></swiper-slide>
        <swiper-slide><img src="../assets/banners/OUTLET.jpg" class="rounded-full"></swiper-slide>
        <swiper-slide><img src="../assets/banners/TAPETES.gif" class="rounded-full"></swiper-slide>
      </swiper>
    </div>

    <div class="mt-16">
      <img src="../assets/onda-branca-top.png" alt="">
      <div class="bg-white">
        <div class="flex justify-center -translate-y-20">
          <h2 class="text-[5vh] text-[--azul-claro] font-bold">Seu Pet também pode gostar ❤️</h2>
        </div>

        <div class="grid grid-cols-[40%_60%] justify-items-center">

          <swiper :direction="'vertical'" :pagination="{ clickable: true }" :modules="modules"
            :autoplay="{ delay: 2500, disableOnInteraction: false, }"
            class="h-[60vh] w-[70%] text-[30vh] rounded-3xl sombra cursor-help">
            <swiper-slide class="">
              <div class="h-[100%] flex justify-center items-center">🐵</div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="h-[100%] flex justify-center items-center">🦁</div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="h-[100%] flex justify-center items-center">🦊</div>
            </swiper-slide>
          </swiper>

          <div class="flex flex-col justify-center items-center gap-28">
            <div class="flex w-[90vh] h-[23vh]">
              <swiper :slidesPerView="3" :space-between="115" :modules="modules"
                :autoplay="{ delay: 2500, disableOnInteraction: false, }" class="">
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    😺</div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🐯</div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🦝</div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🐭</div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🐸</div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🐼</div>
                </swiper-slide>
              </swiper>
            </div>

            <div class="flex w-[90vh] h-[23vh]" id="teste">
              <swiper :slidesPerView="3" :space-between="115" :modules="modules"
                :autoplay="{ delay: 2500, disableOnInteraction: false, }" class="swiper-wrapper">
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🐻</div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🐻</div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🐷</div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🐮</div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🐶</div>
                </swiper-slide>
                <swiper-slide>
                  <div
                    class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">
                    🐹</div>
                </swiper-slide>
              </swiper>
            </div>

          </div>
        </div>

      </div>
      <img src="../assets/onda-branca-bottom.png" alt="" class="-translate-y-[80px]">
    </div>

    <div class="m-[4vh_0]">
      <div>
        <h2 class="text-white ml-20 text-[4vh]">Algumas das marcas que trabalhamos</h2>
      </div>
      <div class="flex justify-center items-center">
        <div class="grid grid-cols-6 w-[90%] gap-1">
          <a href="https://purina.com.br/purina" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/Purina-Logo.png" alt="purina logo"></a>
          <a href="https://premierpet.com.br/" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/premier.png" alt="premier logo"></a>
          <a href="https://adimax.com.br/magnus/" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/magnus-2.png" alt="logo magnus"></a>
          <a href="https://www.whiskas.com.br/" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/whiskas-logo.png" alt="logo whiskas"></a>
          <a href="https://www.pedigree.com.br/" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/pedigree-logo-6.png" alt="logo pedigree"></a>
          <a href="https://premierpet.com.br/" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/premierpet.jpg" alt="logo premier pet"></a>
          <a href="https://adimax.com.br/origens/" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/logo-origens.webp" alt="logo origens"></a>
          <a href="https://www.specialdog.com.br/" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/special-dog.png" alt="logo special dog" class="h-[90%]"></a>
          <a href="https://www.instagram.com/pipicatoficial/?hl=pt-br" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/logo-pipicat.jpg" alt="logo pipicat" class="h-[90%]"></a>
          <a href="https://optimumpet.com.br/" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/optimun.jfif" alt="logo optimun" class="h-[90%]"></a>
          <a href="https://www.specialdog.com.br/" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/special-cat.jfif" alt="logo special cat" class="h-[90%]"></a>
          <a href="https://www.royalcanin.com/br" target="_blank"
            class="h-[25vh] bg-white sombra flex justify-center items-center"><img
              src="../assets/logoMarcas/royal-canin.webp" alt="logo royal canin" class="h-[90%]"></a>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="w-[80%]">
        <h2 class="text-white text-[5vh] m-5 font-bold">Pet Shop Online Pet Fuad</h2>
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

    <footerPrincipal/>
    
  </div>
</template>

<script>
import headerPrincipal from '@/components/headerPrincipal.vue';
import footerPrincipal from '@/components/footerPrincipal.vue';
import botaoRecomendacao from '@/components/Auxiliar/botaoRecomendacao.vue';

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
    headerPrincipal,
    botaoRecomendacao,
    footerPrincipal
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  }
};

</script>

<style>
.lista-menu {
  display: none;
}

.container__botao:checked~.lista-menu {
  display: block;
}

.container__botao:hover~.lista-menu {
  display: block;
}

div#teste .swiper-button-prev {}
</style>