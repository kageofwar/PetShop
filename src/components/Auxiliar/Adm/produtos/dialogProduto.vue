<template>
    <dialog id="favDialog" class="w-[75%] h-[70%]">
            <div class="grid grid-cols-3 text-[2.8vh] ml-1">
                <div class="ml-10">#1</div>
                <div class="flex justify-center items-center text-[2.8vh]">
                    <h2>Editar Produto</h2>
                </div>
                <div class="flex justify-end">
                    <button id="cancel" type="reset" class="w-14 bg-red-600 text-white" @click="() => $emit('fechar')">X</button>
                </div>
            </div>
            <form action="">

                <div class="grid grid-cols-[70%_30%] m-6">
                    <div class="bg-[--azul-mais-claro] p-5 w-[96%] [&>*]:mt-2 [&>*]:mb-2">
                        <label for="titulo"> Nome:
                            <input type="text" id="titulo" class="w-[100%] h-[5vh] p-2" :value="titulo">
                        </label>
                        <div class="[&>*]: [&>*]:w-[45%] flex justify-between">
                            <div class="flex flex-col [&>*]:">
                                <label for="valor">Valor:</label>
                                <input type="text" id="valor" class="h-[5vh] p-2" :value="valor">
                            </div>
                            <div class="flex flex-col">
                                <label for="categoria">Categoria:</label>
                                <input type="text" id="categoria" class="h-[5vh] p-2" :value="categoria">
                            </div>
                        </div>
                        <div class="[&>*]:w-[45%] flex justify-between">
                            <div class="flex flex-col [&>*]:">
                                <label for="marca">Marca:</label>
                                <input type="text" id="marca" class="h-[5vh] p-2" :value="marca">
                            </div>
                            <div class="flex flex-col">
                                <label for="data">Data de Criação:</label>
                                <input type="text" id="data" class="h-[5vh] p-2" :value="data">
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
                                <label for="removerImage"
                                    class="bg-red-500 h-16 w-10 flex items-center justify-center ">
                                    <img src="../../assets/administracao/Produtos/Cancel.png">
                                </label>
                                <input type="file" id="removerImage">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="m-6 bg-[--azul-mais-claro] p-5">
                    <div class=" [&>*]:w-80 p-5 grid grid-cols-3 gap-2">
                        <div class="flex flex-col ">
                            <label for="sabor">Sabor:</label>
                            <input type="text" id="sabor" class="h-[5vh] p-2" :value="sabor">
                        </div>
                        <div class="flex flex-col ">
                            <label for="raca">Raças:</label>
                            <input type="text" id="raca" class="h-[5vh] p-2" :value="raca">
                        </div>
                        <div class="flex flex-col">
                            <label for="porte">Porte:</label>
                            <input type="text" id="porte" class="h-[5vh] p-2" :value="porte">
                        </div>
                        <div class="flex flex-col ">
                            <label for="marca">Marca:</label>
                            <input type="text" id="marca" class="h-[5vh] p-2" :value="marca">
                        </div>
                        <div class="flex flex-col">
                            <label for="data">Data de Criação:</label>
                            <input type="text" id="data" class="h-[5vh] p-2" :value="data">
                        </div>
                    </div>
                    <div class="pl-5">
                        <label for="descricao">Descrição:</label>
                        <textarea id="descricao" class="w-[95%] h-[15vh] overflow-auto resize-none" :value="descricao"></textarea>
                    </div>
                    <div class="pl-5">
                        <label for="ingredientes">Ingredientes:</label>
                        <textarea id="ingredientes" class="w-[95%] h-[15vh] overflow-auto resize-none" :value="ingredientes"></textarea>
                    </div>
                </div>

                <div class="flex justify-center items-center">
                    <button type="submit" class="bg-green-400 w-40 h-10 rounded-lg text-white hover:scale-105 transition">Salvar</button>
                </div>
            </form>
            <div>
            </div>
        </dialog>
</template>

<script>
export default {
    props: [
        'open',
        'produtoref'
    ],
    watch: {
        open(newValue, OldValue) {
            if(newValue) {
                favDialog.showModal();
            } else {
                favDialog.close();
            }
        }
    },
    mounted() {
        var updateButton = document.getElementById("updateDetails");
        var cancelButton = document.getElementById("cancel");
        var favDialog = document.getElementById("favDialog");
        
        console.log(this.produtoref);
        console.log(this.open);
    }
}
</script>

