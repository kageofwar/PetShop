<template>
    <div class="h-[100vh] bg-[--azul-mais-claro]">
        <headerAdmin />

        <div class="bg-white transition-width duration-500 w-[75px] h-[92%] absolute overflow-hidden hover:w-[200px] ">
            <div class="w-[200px] [&>*]:grid [&>*]:grid-cols-[38%_62%] mt-5">
                <div
                    class="cursor-pointer border-[2px] border-white hover:border-gray-700 hover:border-[2px] transition duration-500">
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
                        <input type="text"
                            class="h-10 placeholder:text-[2vh] placeholder:text-[--azul-escuro] text-[2vh] p-5 rounded-3xl w-[42vh] focus:outline-none"
                            placeholder="Digite aqui o nome do produto">
                        <button class="flex items-center justify-center bg-[--azul-escuro] rounded-3xl w-24">
                            <img src="../../assets/administracao/Produtos/search.png" class="h-10">
                        </button>
                    </div>
                    <div class="flex items-center">
                        <button
                            class="flex items-center justify-center bg-[--azul-escuro] w-48 h-10 rounded-3xl text-white text-[2.5vh]">
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

                <div class="h-[91%] overflow-scroll">
                    <div v-for="produto in produtos" :key="produto.id">
                        <produtoAdmin :id="produto.id" :nome="produto.titulo" :produtoImagem="produto.img_url" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Um dialog simples contendo um form -->
        <dialog id="favDialog" class="w-[75%]">
            <div class="grid grid-cols-3 text-[2.8vh] ml-1">
                <div class="ml-10">#1</div>
                <div class="flex justify-center items-center text-[2.8vh]">
                    <h2>Editar Produto</h2>
                </div>
                <div class="flex justify-end">
                    <button id="cancel" type="reset" class="w-14 bg-red-600 text-white">X</button>
                </div>
            </div>
            <div class="grid grid-cols-[70%_30%] m-6">
                <div class="bg-[--azul-mais-claro] p-5 w-[96%] [&>*]:mt-2 [&>*]:mb-2">
                    <label for="titulo"> Nome:
                        <input type="text" id="titulo" class="w-[100%] h-[5vh] p-2">
                    </label>
                    <div class="[&>*]: [&>*]:w-[45%] flex justify-between">
                        <div class="flex flex-col [&>*]:">
                            <label for="valor">Valor:</label>
                            <input type="text" id="valor" class="h-[5vh] p-2">
                        </div>
                        <div class="flex flex-col">
                            <label for="categoria">Categoria:</label>
                            <input type="text" id="categoria" class="h-[5vh] p-2">
                        </div>
                    </div>
                    <div class="[&>*]:w-[45%] flex justify-between">
                        <div class="flex flex-col [&>*]:">
                            <label for="marca">Marca:</label>
                            <input type="text" id="marca" class="h-[5vh] p-2">
                        </div>
                        <div class="flex flex-col">
                            <label for="data">Data de Criação:</label>
                            <input type="text" id="data" class="h-[5vh] p-2">
                        </div>
                    </div>
                </div>

                <div class="flex items-end">
                    <div class="h-full w-full bg-slate-300 flex justify-center items-center">
                        <img src="../../assets/produtos/pedrigre.png" class="h-52">
                    </div>
                    <div class="mr-1 ml-1 [&>*]:mt-1">
                        <div>
                            <label for="adicionarImage"
                                class="bg-green-500 h-16 w-10 flex items-center justify-center ">
                                <img src="../../assets/administracao/Produtos/Pencil.png">
                            </label>
                            <input type="file" id="adicionarImage">
                        </div>
                        <div>
                            <label for="removerImage" class="bg-red-500 h-16 w-10 flex items-center justify-center ">
                                <img src="../../assets/administracao/Produtos/Cancel.png">
                            </label>
                            <input type="file" id="removerImage">
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-6 bg-[--azul-mais-claro]">
                <div class=" [&>*]:w-80 p-5 grid grid-cols-3 gap-2">
                    <div class="flex flex-col ">
                        <label for="sabor">Sabor:</label>
                        <input type="text" id="sabor" class="h-[5vh] p-2">
                    </div>
                    <div class="flex flex-col ">
                        <label for="raca">Raças:</label>
                        <input type="text" id="raca" class="h-[5vh] p-2">
                    </div>
                    <div class="flex flex-col">
                        <label for="porte">Porte:</label>
                        <input type="text" id="porte" class="h-[5vh] p-2">
                    </div>
                    <div class="flex flex-col ">
                        <label for="marca">Marca:</label>
                        <input type="text" id="marca" class="h-[5vh] p-2">
                    </div>
                    <div class="flex flex-col">
                        <label for="data">Data de Criação:</label>
                        <input type="text" id="data" class="h-[5vh] p-2">
                    </div>
                </div>
                <div class="pl-5">
                    <label for="descricao">Descricao:</label>
                    <textarea id="descricao" class="w-[95%] h-[15vh] overflow-auto resize-none"></textarea>
                </div>
                <div class="pl-5">
                    <label for="ingredientes">Ingredientes:</label>
                    <textarea id="ingredientes" class="w-[95%] h-[15vh] overflow-auto resize-none"></textarea>
                </div>
            </div>

        </dialog>

        <menu class="ml-20">
            <button id="updateDetails">Update details</button>
        </menu>
    </div>
</template>

<script>
    import headerAdmin from '@/components/Auxiliar/Adm/headerAdmin.vue';
    import produtoAdmin from '@/components/Auxiliar/Adm/produtoAdmin.vue';
    export default {
        components: {
            headerAdmin,
            produtoAdmin
        },
        data() {
            return {
                produtos: [],
            }
        },
        computed: {},
        mounted() {
            fetch('http://127.0.0.1:8000/api/produtos')
                .then(api => api.json())
                .then(data => {
                    this.produtos = data.data,
                        console.log(this.produtos)
                })
            var updateButton = document.getElementById("updateDetails");
            var cancelButton = document.getElementById("cancel");
            var favDialog = document.getElementById("favDialog");
            // O botão Update abre uma Dialog
            updateButton.addEventListener("click", function () {
                favDialog.showModal();
            });
            // O botão cancelButtom fecha uma Dialog
            cancelButton.addEventListener("click", function () {
                favDialog.close();
            });
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

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.679);
    }

    input[type="file"] {
        display: none;
    }
</style>