<template>
    <div class="header_categorias bg-white space-x-11 flex justify-center items-center h-[100px]">
        <botaoCategoria imageName="DogBone.png" categoriaNome="Cachorros" rota="cachorro" />
        <botaoCategoria imageName="PawPrints.png" categoriaNome="Gatos" rota="gato" />
        <botaoCategoria imageName="Feather.png" categoriaNome="Passaros" />
        <botaoCategoria imageName="Fish.png" categoriaNome="Outros Pets" />
        <botaoCategoria imageName="SupplementBottle.png" categoriaNome="Remedios" />
        <botaoCategoria imageName="DogHouse.png" categoriaNome="Casa" />
      </div>
</template>
<script>
import botaoCategoria from "../components/Auxiliar/headerAux/botaoCategoria.vue"

export default {
    components: {
        botaoCategoria
    }
}

</script>