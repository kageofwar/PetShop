<template>
    <div id="caixa" class="bg-white rounded-[25px] w-[98%] transition-height duration-1000 overflow-hidden">
        <div class="flex items-cente justify-center text-[3.7vh] space-x-28">
          <img src="../../../assets/icons/Paste.png" class="h-10">
            <h2 class="">Ficha Técnica</h2>
          <img src="../../../assets/icons/MoreThan.png" class="h-10">
        </div>
        <div class="[&>*]:grid [&>*]:grid-cols-[25%_75%] divide-y-2 divide-black text-[2.5vh] break-words">
            <div><h2>Porte</h2><h2>{{ porte }}</h2></div>
            <div><h2>Idade</h2><h2>{{ idade }}</h2></div>
            <div><h2>Raças</h2><h2>{{ racas }}</h2></div>
            <div><h2>Quantidade</h2><h2>{{ quantidade }}</h2></div>
            <div><h2>Sabor</h2><h2>{{ sabor }}</h2></div>
            <div><h2>Pet</h2><h2>{{ pet }}</h2></div>
            <div><h2>Marca</h2><h2>{{ marca }}</h2></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'porte',
        'idade',
        'racas',
        'quantidade',
        'sabor',
        'pet',
        'marca',
    ],
    mounted() {
        document.getElementById('caixa').style.height = '50vh';
        document.getElementById('caixa').addEventListener('click', function (e) {
            e.currentTarget.style.height = e.currentTarget.style.height === '50vh' ?
            e.currentTarget.style.height = '5.5vh':
            e.currentTarget.style.height = '50vh' ;
        })
    }
}
</script>