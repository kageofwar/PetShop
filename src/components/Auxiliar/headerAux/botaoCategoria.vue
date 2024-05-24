<template>
    <router-link :to="`/Produtos/${rota}`"
        class="sombra z-40 flex justify-center items-center text-[20px] h-[50px] w-[250px] overflow-hidden rounded-[33px] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-150">
        <img :src="`/src/assets/icones/categoriaicons/${imageName}`" alt="imagem da categoria">
        <h2 class="text-[--azul-claro]">{{ categoriaNome }}</h2>
    </router-link>
</template>

<script setup>

defineProps([
    'categoriaNome',
    'imageName',
    'rota'
]);

</script>