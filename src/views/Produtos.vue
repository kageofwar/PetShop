<template>
    <div class="bg-[--azul-claro]">
        <headerPrincipal />
        <div class="header_categorias bg-white space-x-11 flex justify-center items-center h-[100px]">
            <botaoCategoria imageName="DogBone.png" categoriaNome="Cachorros" rota="cachorro" />
            <botaoCategoria imageName="PawPrints.png" categoriaNome="Gatos" rota="gato" />
            <botaoCategoria imageName="Feather.png" categoriaNome="Passaros" />
            <botaoCategoria imageName="Fish.png" categoriaNome="Outros Pets" />
            <botaoCategoria imageName="SupplementBottle.png" categoriaNome="Remedios" />
            <botaoCategoria imageName="DogHouse.png" categoriaNome="Casa" />
        </div>
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
                <filtro />
            </div>

            <div>
                <div class="grid grid-cols-4 gap-6">
                    <div v-if="!filtrarProduto" />
                    <div v-else v-for="produto in filtrarProduto" :key="produto.id">
                        <Produto :texto="produto.titulo" :valor="produto.valor" />
                    </div>
                </div>
            </div>
        </div>
        <footerPrincipal />
    </div>
</template>

<script>
import headerPrincipal from "@/components/headerPrincipal.vue";
import footerPrincipal from "@/components/footerPrincipal.vue";
import Produto from "@/components/Auxiliar/produtosAux/produto.vue";
import filtro from "@/components/Auxiliar/produtosAux/filtro.vue";
import botaoCategoria from "@/components/Auxiliar/botaoCategoria.vue";

export default {
    components: {
        headerPrincipal,
        footerPrincipal,
        Produto,
        filtro,
        botaoCategoria
    },
    data() {
        return {
            produtos: [],

        }
    },
    computed: {
        filtrarProduto() {
            return this.produtos?.filter((produto) => produto.categoria === this.$route.params.rota)
        }
    },
    mounted() {
        fetch('http://127.0.0.1:8000/api/produtos')
            .then(api => api.json())
            .then(data => this.produtos = data);
    },
};
</script>