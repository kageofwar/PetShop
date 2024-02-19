<template>
    <div class="flex justify-center flex-col text-center rounded-[48px] border w-[35vh] h-[50vh] bg-[#275BA8] text-white text-[3vh]">
        <h2>R${{valor}}</h2>
        <img :src="`src/assets/produtos/${imagemProduto}`" alt="" class="h-[20vh] w-[20vh] self-center">
        <h2 class="w-[50%] self-center">{{nomeProduto}}</h2>
        <button class="btn btn-square self-center w-32 mt-2 bg-[#5096B5] text-white border-none text-[20px]">Comprar</button>
    </div>
</template>

<script setup>

defineProps([
    'valor',
    'nomeProduto',
    'imagemProduto'
]);

</script>