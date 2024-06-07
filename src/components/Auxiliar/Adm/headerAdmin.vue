<template>
    <div class="grid grid-cols-[5%_25%_45%_25%] bg-white h-[8%]">
            <router-link :to="`/administracao/opcoes`" class="flex items-center">
                <img src="../../../assets/administracao/Produtos/voltar_azul.png" alt="botao de voltar" class="h-[70%]">
            </router-link>
            <div class="flex items-center">
                <img src="../../../assets/PetFuadLogo.png" alt="logo da empresa" class="h-[40%]">
            </div>
            <div class="flex items-center justify-center text-[2.7vh] text-[--azul-escuro]">
                <h1>Gerenciamento de Produtos</h1>
            </div>
            <div class="flex items-center justify-end mr-20 text-[2vh] font-semibold">
                <h2> Olá, !_user_! </h2>
            </div>
        </div>
</template>