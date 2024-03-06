<template>
  <div class="h-full bg-[--azul-claro]">

    <div>
      <div class="header_pesquisar flex justify-center space-x-[70px] items-center h-[70px] fixed bg-white w-[100%] z-50">
        <img src="../assets/PetFuad-removebg.png" alt="logo da loja" class="h-[100px]">
        <div class="flex justify-end w-[50%]">
          <input type="search" name="" id="" placeholder="O que seu Pet precisa?"
            class="text-center bg-[--azul-escuro] h-[55px] w-[100%] border rounded-[200px] placeholder:text-white text-white">
          <a href="#" class="absolute mr-5 translate-y-[2px]"><img src="../assets/icons/headerIcons/Search.png"
              alt="imagem de lupa" class="h-[6vh]"></a>
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
      <div class="h-[70px]"></div>
    </div>

    <div class="header_categorias bg-white space-x-11 flex justify-center items-center h-[100px] ">
      <botaoCategoria imageName="DogBone.png" categoriaNome="Cachorros" rota="cachorros" />
      <botaoCategoria imageName="PawPrints.png" categoriaNome="Gatos" />
      <botaoCategoria imageName="Feather.png" categoriaNome="Pássaros" />
      <botaoCategoria imageName="Fish.png" categoriaNome="Outros Pets" />
      <botaoCategoria imageName="SupplementBottle.png" categoriaNome="Remédios" />
      <botaoCategoria imageName="DogHouse.png" categoriaNome="Casa" />
    </div>

    <div class="header_parcele flex justify-center items-center text-white h-[30px] bg-[--azul-escuro] text-[1.6vh]">
      <img src="../assets/icons/headerIcons/Magnetic Card.png" alt="credit card" class="h-[30px] mb-[8px]">
      <p class="p-[10px]">Parcele em até 3x sem juros. Com parecelas a partir de $75.</p>
      <img src="../assets/icons/headerIcons/Magnetic Card.png" alt="credit card" class="h-[30px] mb-[8px]">
    </div>

    <div class="flex justify-center items-center mt-10">
      <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :navigation="true" :modules="modules"  class="mySwiper" :autoplay="{ delay: 2500, disableOnInteraction: false, }">
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
              <swiper :slidesPerView="3" :space-between="115" :modules="modules" :autoplay="{ delay: 2500, disableOnInteraction: false, }" class="">
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">😺</div></swiper-slide>
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🐯</div></swiper-slide>
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🦝</div></swiper-slide>
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🐭</div></swiper-slide>
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🐸</div></swiper-slide>
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🐼</div></swiper-slide>
              </swiper>
            </div>

            <div class="flex w-[90vh] h-[23vh]" id="teste">
              <swiper :slidesPerView="3" :space-between="115" :modules="modules" :autoplay="{ delay: 2500, disableOnInteraction: false, }" class="swiper-wrapper">
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🐻‍❄️</div></swiper-slide>
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🐻</div></swiper-slide>
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🐷</div></swiper-slide>
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🐮</div></swiper-slide>
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🐶</div></swiper-slide>
                <swiper-slide><div class="flex mt-1 ml-1 w-[20vh] h-[20vh] justify-center items-center rounded-3xl sombra text-[10vh]">🐹</div></swiper-slide>
              </swiper>
            </div>

          </div>
        </div>

      </div>
      <img src="../assets/onda-branca-bottom.png" alt="" class="-translate-y-[50px]">
    </div>

    <div class="m-[10vh_0]">
      <div>
        <h2 class="text-white ml-20 text-[4vh]">Algumas das marcas que trabalhamos</h2>
      </div>
      <div class="flex justify-center items-center">
        <div class="grid grid-cols-6 w-[90%] gap-1">
          <a href="https://purina.com.br/purina" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/Purina-Logo.png" alt="purina logo"></a>
          <a href="https://premierpet.com.br/" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/premier.png" alt="premier logo"></a>
          <a href="https://adimax.com.br/magnus/" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/magnus-2.png" alt="logo magnus"></a>
          <a href="https://www.whiskas.com.br/" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/whiskas-logo.png" alt="logo whiskas"></a>
          <a href="https://www.pedigree.com.br/" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/pedigree-logo-6.png" alt="logo pedigree"></a>
          <a href="https://premierpet.com.br/" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/premierpet.jpg" alt="logo premier pet"></a>
          <a href="https://adimax.com.br/origens/" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/logo-origens.webp" alt="logo origens"></a>
          <a href="https://www.specialdog.com.br/" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/special-dog.png" alt="logo special dog" class="h-[90%]"></a>
          <a href="https://www.instagram.com/pipicatoficial/?hl=pt-br" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/logo-pipicat.jpg" alt="logo pipicat" class="h-[90%]"></a>
          <a href="https://optimumpet.com.br/" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/optimun.jfif" alt="logo optimun" class="h-[90%]"></a>
          <a href="https://www.specialdog.com.br/" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/special-cat.jfif" alt="logo special cat" class="h-[90%]"></a>
          <a href="https://www.royalcanin.com/br" target="_blank" class="h-[25vh] bg-white sombra flex justify-center items-center"><img src="../assets/logoMarcas/royal-canin.webp" alt="logo royal canin" class="h-[90%]"></a>
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

    <div class="flex space-x-4 bg-white h-20 rounded-t-3xl mt-20 items-center">
      <div class="w-[40%] flex items-center justify-center ml-10 text-[2.4vh] flex-col">
        <h2>Cadastre-se e receba nossas promoções e novidades</h2>
        <h2>antes de todo mundo!</h2>
      </div>
      <input type="email" name="" id="" class="bg-[#D9D9D9] w-[28%] h-14 rounded-full pl-4" placeholder="Seu E-mail">
      <select name="pet" id="" class="bg-[#D9D9D9] w-[15%] h-14 rounded-full pl-4 text-opacity-10">
        <option disabled selected class="">Qual o seu Pet?</option>
        <option value="volvo">Nenhum</option>
        <option value="volvo">1</option>
        <option value="saab">2</option>
        <option value="opel">3</option>
        <option value="audi">4</option>
      </select>
      <button class="border-[2px] w-[10%] h-14 rounded-full border-black">Cadastrar</button>
    </div>
    
    <div class="flex items-center justify-center bg-[#275BA8] text-white space-x-20">

      <div>
        <h2 class="text-[3vh] font-bold">Sobre Nós</h2>
        <li class="list-none font-light">
          <ul>Quem Somos</ul>
          <ul>Nossa Loja</ul>
          <ul>Seja um Funcionario</ul>
          <ul>Quem Somos</ul>
        </li>
      </div>

      <div>
        <h2 class="text-[3vh] font-bold">Dúvidas</h2>
        <li class="list-none font-light">
          <ul>Política de Entregas</ul>
          <ul>Política de privacidade</ul>
          <ul>Ouvidoria</ul>
        </li>
      </div>

      <div>
        <h2 class="text-[3vh] font-bold">Fale com a gente!</h2>
        <li class="list-none font-light">
          <ul>example@email.com</ul>
          <ul>(11) 99999-9999</ul>
        </li>
      </div>
      
      <div class="flex border-[2px] p-2 rounded-full border-black">
        <div class="flex flex-col justify-center items-center">
          <h2>Compre também</h2>
          <h2>pelo WhatsApp!</h2>
        </div>
        <img src="../assets/icons/footerIcons/WhatsApp.png" alt="">
      </div>

      <div>
        <div class="flex flex-col justify-center items-center p-5 gap-2">  
          <h2>Redes Sociais</h2>
          <div class="flex space-x-4">
            <img src="../assets/icons/footerIcons/redesSociais/instagram-icon.svg" alt="">
            <img src="../assets/icons/footerIcons/redesSociais/facebook.png" alt="">
            <img src="../assets/icons/footerIcons/redesSociais/linkedin.png" alt="">
            <img src="../assets/icons/footerIcons/redesSociais/pinterest.png" alt="">
          </div>
        </div>

        <div>
          <div class="flex flex-col justify-center items-center p-5">
            <h2>Formas Pagamento</h2>
            <div class="flex justify-center items-center space-x-2">
              <img src="../assets/icons/footerIcons/formasPagamento/elo-logo.png" class="w-[50px] h-[20px]" alt="">
              <img src="../assets/icons/footerIcons/formasPagamento/visa-logo.png" class="w-[48px] h-[17px]" alt="">
              <img src="../assets/icons/footerIcons/formasPagamento/hypercard-logo.png" class="w-[40px] h-[18px]" alt="">
              <img src="../assets/icons/footerIcons/formasPagamento/barcode-icon.png" class="h-[20px]" alt="">
              <img src="../assets/icons/footerIcons/formasPagamento/pix-transparent.svg" class="h-[25px]" alt="">
              <img src="../assets/icons/footerIcons/formasPagamento/mastercard-logo.png" alt="">
              <img src="../assets/icons/footerIcons/formasPagamento/dinersclub-logo.png" class="w-[30px] h-[20px]" alt="">
              <img src="../assets/icons/footerIcons/formasPagamento/americanexpress-logo.png" alt="">
            </div>
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

div#teste .swiper-button-prev {
}
</style>