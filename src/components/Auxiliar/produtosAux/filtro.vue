<template>
    <div class="Filtro1 border-[2px] w-[40vh] h-[5vh] rounded-[10px] overflow-hidden transition-height duration-500"
        id="Filtro1">
        <div class="titulo grid grid-cols-[80%_20%] items-center space-x- bg-white h-[5vh] w-[100%] cursor-pointer transition ease-in-out delay-150"
            id="titulo">
            <div class="flex justify-center items-center">
                <h2 class="ml-8">Primeiro Filtro</h2>
            </div>
            <div>
                <img src="../../../assets/icones/MoreThan.png" alt="" class="h-10 transition duration-500"
                    id="botaozin">
            </div>
        </div>
        <div class="form_check flex flex-col ml-5 text-white text-[2.5vh] gap-3 mt-4" id="form_check">
            <div class="space-x-2">
                <input type="checkbox" name="filtro" id="filtro1" class=" checked:bg-black">
                <label for="filtro1" class="">Any name</label>
            </div>
            <div class="space-x-2">
                <input type="checkbox" name="filtro" id="filtro2">
                <label for="filtro2">Any name</label>
            </div>
            <div class="space-x-2">
                <input type="checkbox" name="filtro" id="filtro3">
                <label for="filtro3">Any name</label>
            </div>
            <div class="space-x-2">
                <input type="checkbox" name="filtro" id="filtro4">
                <label for="filtro4">Any name</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const botaozin = document.getElementById("botaozin")
    botaozin.style.transform = "rotate(0deg)"

    document.getElementById('Filtro1').style.height = '29vh';
    document.getElementById('Filtro1').addEventListener('click', function (e) {
        e.currentTarget.style.height = e.currentTarget.style.height === '29vh' ?
            e.currentTarget.style.height = '5.2vh' :
            e.currentTarget.style.height = '29vh';

        botaozin.style.transform = botaozin.style.transform === "rotate(0deg)" ?
            botaozin.style.transform = "rotate(-90deg)" :
            botaozin.style.transform = "rotate(0deg)";
    })
}
)
</script>