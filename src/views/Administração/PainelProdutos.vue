<template>
    <div class="h-[100vh] bg-[--azul-mais-claro]">
        <headerAdmin/>

        <div class="bg-white transition-width duration-500 w-[75px] h-[92%] absolute overflow-hidden hover:w-[200px] ">
            <div class="w-[200px] [&>*]:grid [&>*]:grid-cols-[38%_62%] mt-5">
                <div class="cursor-pointer border-[2px] border-white hover:border-gray-700 hover:border-[2px] transition duration-500">
                    <div class="flex items-center justify-center">
                        <img src="../../assets/administracao/Produtos/icone_produtos.png" alt="">
                    </div>
                    <div class="flex items-center text-[1.8vh]">
                        <h2>Produtos</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="ml-[13vh] mt-14 h-[80%] mr-[6vh] overflow-hidden">
            <div class="bg-white h-full p-5">
                <div class="flex border-2 text-[3vh] justify-between p-1 mr-[1.1vh]">
                    <h2 class=" text-[--azul-escuro]">Produtos Cadastrados</h2>
                    <div class="flex border-2 border-[--azul-escuro] rounded-3xl">
                        <input type="text" class="h-10 placeholder:text-[2vh] placeholder:text-[--azul-escuro] text-[2vh] p-5 rounded-3xl w-[42vh] focus:outline-none" placeholder="Digite aqui o nome do produto"> 
                        <button class="flex items-center justify-center bg-[--azul-escuro] rounded-3xl w-24">
                            <img src="../../assets/administracao/Produtos/search.png" class="h-10">
                        </button>
                    </div>
                    <div class="flex items-center">
                        <button class="flex items-center justify-center bg-[--azul-escuro] w-48 h-10 rounded-3xl text-white text-[2.5vh]">
                            <div>Filtros</div>
                            <img src="../../assets/administracao/Produtos/mais_filtro.png" class="p-1 mt-1 mb-1">
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-[5%_10%_55%_10%_20%] [&>*]:border-2 mr-[1.1vh]">
                    <div class="flex items-center justify-center space-x-2 bg-red-300">
                        <h2>#</h2>
                        <img src="../../assets/administracao/Produtos/setinha.png" class="h-6">
                    </div>
                    <div class="flex items-center justify-center bg-yellow-300">
                        <h2>Imagem</h2>
                    </div>
                    <div class="flex items-center justify-center bg-blue-300">
                        <h2>Nome do Produto</h2>
                    </div>
                    <div class="flex items-center justify-center bg-purple-300">
                        <h2>Data</h2>
                    </div>
                    <div class="flex items-center justify-center bg-lime-300">
                        <h2>Ação</h2>
                    </div>
                </div>

                <div class="h-[91%] overflow-auto ">
                    <produtoAdmin/>
                    <produtoAdmin/>
                    <produtoAdmin/>
                    <produtoAdmin/>
                    <produtoAdmin/>
                    <produtoAdmin/>
                    <produtoAdmin/>
                    <produtoAdmin/>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
import headerAdmin from '@/components/Auxiliar/Adm/headerAdmin.vue';
import produtoAdmin from '@/components/Auxiliar/Adm/produtoAdmin.vue';
export default {
    components: {
        headerAdmin,
        produtoAdmin
    }
}
</script>

<style scoped>

    *::-webkit-scrollbar {
      width: 10px;
      /* width of the entire scrollbar */
    }
    
    *::-webkit-scrollbar-track {
      background: white;
      /* color of the tracking area */
    }
    
    *::-webkit-scrollbar-thumb {
      background-color: rgb(194, 196, 200);
      /* color of the scroll thumb */
      border-radius: 50px;
      /* roundness of the scroll thumb */
      border: 4px solid white;
      /* creates padding around scroll thumb */
    }
</style>