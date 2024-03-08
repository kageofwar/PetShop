<template>
    <div class="bg-[--azul-claro]">
        <headerPrincipal />

        <img src="../assets/onda-branca-bottom.png" alt="" class="-translate-y-[79px]">
        <div class="grid grid-cols-2 -translate-y-10">
            <div class="flex justify-center items-center flex-col text-[3.2vh] font-bold text-white">
                <h2>Todos os Produtos</h2>
                <h2>para cachorros</h2>
            </div>

            <div class="flex justify-center items-center space-x-10">
                <div class="flex items-center text-white text-[3.2vh] cursor-pointer">
                    <h2>Filtros</h2>
                    <img src="../assets/icons/LimparFiltros.png" alt="">
                </div>

                <select name="ordenar" id="" class="bg-white w-[25vh] h-14 rounded-full border-[2px] border-black pl-4">
                    <option disabled selected class="">Ordenar Por</option>
                    <option value="volvo">Menor Valor</option>
                    <option value="saab">Maior Valor</option>
                    <option value="opel">Melhor Avaliado</option>
                    <option value="audi">Ordem alfabetica</option>
                </select>
            </div>
        </div>

        <div class="grid grid-cols-[25%_75%]">

            <div class="flex items-center flex-col">
                <filtro/>
            </div>

            <div class="flex justify-center flex-col">
                <div class="grid grid-cols-4 mb-6">
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                </div>
                <div class="grid grid-cols-4 mb-6">
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                </div>
                <div class="grid grid-cols-4 mb-6">
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                </div>
                <div class="grid grid-cols-4 mb-6">
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                    <Produto texto="Ração Pedigree Adulto Nutrientes + Sabor Carne 1KG" valor="R$ 29,90" />
                </div>
            </div>
        </div>
        <footerPrincipal />
    </div>
</template>

<script setup>
import headerPrincipal from "@/components/headerPrincipal.vue";
import footerPrincipal from "@/components/footerPrincipal.vue";
import Produto from "@/components/Auxiliar/produtosAux/produto.vue";
import filtro from "@/components/Auxiliar/produtosAux/filtro.vue";
</script>
