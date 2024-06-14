<template>
    <div class="grid grid-cols-[5%_10%_55%_10%_20%] [&>*]:border-2">
        <div class="flex items-center justify-center">
            <p>{{ id }}</p>
        </div>
        <div class="flex items-center justify-center">
            <p class=""><img :src="`${produtoImagem}`" class="h-20"></p>
        </div>
        <div class="flex items-center text-[2vh] p-3">
            <p>{{ nome }}</p>
        </div>
        <div class="flex items-center justify-center">
            <p>{{ dataCadastro }}</p>
        </div>
        <div class="flex items-center justify-center gap-10">
            <img src="../../../assets/administracao/Produtos/vizualizar.svg" class="h-10 cursor-pointer transition hover:scale-110">
            <img src="../../../assets/administracao/Produtos/editar.svg" class="h-10 cursor-pointer transition hover:scale-110">
            <img src="../../../assets/administracao/Produtos/excluir.svg" class="h-10 cursor-pointer transition hover:scale-110">
        </div>
    </div>
    
</template>

<script>
export default {
    props: [
        'id',
        'produtoImagem',
        'nome',
        'dataCadastro'
    ]
}
</script>