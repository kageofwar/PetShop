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

            <div class="flex justify-center items-center">

                <div class="Caixa border-[2px] w-[30vh] rounded-[23px]">
                    <div class="titulo flex justify-center items-center bg-white h-[5vh] w-[100%] rounded-full"
                        id="titulo">
                        <h2 class="">Filtro 1 <-Any Name-></h2>
                    </div>
                    <div class="form_check flex flex-col justify-center items-center" id="form_check">
                        <div>
                            <input type="checkbox" name="filtro" id="filtro1">
                            <label for="filtro1">Any name</label>
                        </div>
                        <div>
                            <input type="checkbox" name="filtro" id="filtro2">
                            <label for="filtro2">Any name</label>
                        </div>
                        <div>
                            <input type="checkbox" name="filtro" id="filtro3">
                            <label for="filtro3">Any name</label>
                        </div>
                        <div>
                            <input type="checkbox" name="filtro" id="filtro4">
                            <label for="filtro4">Any name</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center items-center">a</div>
        </div>


        <footerPrincipal />
    </div>
</template>

<script setup>
import headerPrincipal from "@/components/headerPrincipal.vue";
import footerPrincipal from "@/components/footerPrincipal.vue";
import { onMounted } from "vue";

onMounted ( () => 
    document.getElementById('titulo').addEventListener('click', function() {
        console.log('teste')
    })
)

</script>

<style>
</style>
