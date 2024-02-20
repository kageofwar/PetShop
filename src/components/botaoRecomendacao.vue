<template>
    <a href="" class="border rounded-t-[50px] rounded-bl-[50px] rounded p-3 text-white w-[90%] h-[100%]">
    <div>
        <div class="ml-3">
            <img :src="`src/assets/icons/recomendacaoIcons/${nomeDaImagem}`" alt="icone">
            <p class="text-[2vh]">{{ RecomendacaoTitulo }}</p>
        </div>
    </div>
    </a>
</template>

<script setup>

defineProps([
    'nomeDaImagem',
    'RecomendacaoTitulo'
]);

</script>