<template>
      <div class="flex flex-col bg-white rounded-2xl">
        <div class="flex items-center justify-center font-semibold"><h2 class="text-[3vh] mb-2">Produtos Similares</h2><img src="../../../assets/icons/PriceTag.png" alt="price tag" class="h-7"></div>
        <div class="flex w-[145vh] h-[22vh]">
          <swiper :slidesPerView="4" :spaceBetween="0" :modules="modules" class="mySwiper" :autoplay="{ delay: 1000, disableOnInteraction: false, }">
          <swiper-slide>
            <div class="flex mt-1 ml-1 w-[20vh] h-[19vh] justify-center items-center rounded-3xl sombra flex-col">
              <img src="../../../assets/produtos/pedrigre.png" alt="" class="h-[15vh] w-[15vh]">
              <h2>Produto similar 1</h2>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="flex mt-1 ml-1 w-[20vh] h-[19vh] justify-center items-center rounded-3xl sombra flex-col">
              <img src="../../../assets/produtos/pedrigre.png" alt="" class="h-[15vh] w-[15vh]">
              <h2>Produto similar 1</h2>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="flex mt-1 ml-1 w-[20vh] h-[19vh] justify-center items-center rounded-3xl sombra flex-col">
              <img src="../../../assets/produtos/pedrigre.png" alt="" class="h-[15vh] w-[15vh]">
              <h2>Produto similar 1</h2>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="flex mt-1 ml-1 w-[20vh] h-[19vh] justify-center items-center rounded-3xl sombra flex-col">
              <img src="../../../assets/produtos/pedrigre.png" alt="" class="h-[15vh] w-[15vh]">
              <h2>Produto similar 1</h2>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="flex mt-1 ml-1 w-[20vh] h-[19vh] justify-center items-center rounded-3xl sombra flex-col">
              <img src="../../../assets/produtos/pedrigre.png" alt="" class="h-[15vh] w-[15vh]">
              <h2>Produto similar 1</h2>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="flex mt-1 ml-1 w-[20vh] h-[19vh] justify-center items-center rounded-3xl sombra flex-col">
              <img src="../../../assets/produtos/pedrigre.png" alt="" class="h-[15vh] w-[15vh]">
              <h2>Produto similar 1</h2>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Autoplay, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Autoplay
  },
  data(){
    return {
        modules: [Autoplay, Pagination]
    }
  },
}
</script>