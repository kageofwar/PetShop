<template>
    <div class="flex items-center justify-center bg-blue-200 h-[100vh]">

        <router-link :to="`/administracao/opcoes/painel_produtos`" class="flex items-center justify-center bg-white sombra_produtos rounded-xl w-[12vh] h-[10vh] p-5">
            <img src="../../assets/administracao/opcoes/produtos.png" alt="" class="h-20">
        </router-link>
        
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {

}
</script>