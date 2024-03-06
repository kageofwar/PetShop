<template>
    <headerPrincipal />

    <div class="bg-[--azul-claro]">
        <img src="../assets/onda-branca-bottom.png" alt="" class=" z-0 -translate-y-[79px]">
        <div class="grid grid-cols-2">
            <div>
                <h2>Todos os Produtos</h2>
                <h2>para cachorro</h2>
            </div>

            <div class="flex ml-[35vh]">
                <div class="flex">
                    <h2>Filtros</h2>
                    <img src="../assets/icons/LimparFiltros.png" alt="">
                </div>

                <select name="ordenar" id="" class="bg-white w-[25vh] h-14 rounded-full border-[2px] border-black pl-4">
                    <option disabled selected class="">Ordenar Por</option>
                    <option value="volvo">1</option>
                    <option value="saab">2</option>
                    <option value="opel">3</option>
                    <option value="audi">4</option>
                </select>
            </div>
        </div>
        <img src="../assets/onda-branca-bottom.png" alt="" class="rotate-180">

        <div class="">
            <h2>teste</h2>
        </div>
    </div>

    <footerPrincipal />
</template>

<script>
import headerPrincipal from "@/components/headerPrincipal.vue";
import footerPrincipal from "@/components/footerPrincipal.vue";


export default {
    components: {
        headerPrincipal,
        footerPrincipal
    }
}
</script>
