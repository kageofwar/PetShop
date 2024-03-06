<template>
    <router-link :to="`/${rota}`" class="sombra flex justify-center items-center text-[20px] h-[50px] w-[250px] overflow-hidden rounded-[33px] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-150">
        <img :src="`src/assets/icons/categoriaIcons/${imageName}`" alt="imagem da categoria">
        <h2 class="text-[--azul-claro]">{{categoriaNome}}</h2>
    </router-link>
</template>

<script setup> 

defineProps([
    'categoriaNome',
    'imageName',
    'rota'
]);

</script>

<style>

.sombra {
    box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.2);
}

</style>