<template>
    <div class="flex flex-col items-center justify-center bg-blue-200 h-[100vh]">
        <div class="m-10"> <!-- TITULO E LOGO -->
            <img src="../../assets/PetFuadLogo.png" alt="logo da empresa" class="h-16">
            <h2 class=" text-green-500">Setor Administrativo</h2>
        </div>

        <div class="flex flex-col bg-[--azul-escuro] p-6 rounded-xl w-[60vh]">
            <div class="grid grid-cols-[40%_60%] w-full h-28 mb-10"> <!-- HEADER -->
                <div class="flex items-end text-white">
                    <h2 class="text-[3vh]">Faça Seu Login!</h2>
                </div>

                <div class="flex justify-end">
                    <img src="../../assets/Pets.png" class="h-24" alt="img de cachorro e gato">
                </div>
            </div>

            <form action=""> <!-- FORMULARIO DE LOGIN -->

                <div class="space-y-7"> <!-- CAMPOS PARA LOGINS -->
                    <div>
                        <h2 class="text-white">E-mail:</h2>
                        <input type="email" class="w-[50vh] h-[5vh] rounded-[10px] bg-[--azul-mais-claro] p-2 sombra_produtos" placeholder="seuemail@example.com">
                    </div>

                    <div>
                        <h2 class="text-white ">Senha:</h2>
                        <input type="password" class="w-[50vh] h-[5vh] rounded-[10px] bg-[--azul-mais-claro] p-2 sombra_produtos" placeholder="123456789">
                    </div>
                </div>

                <div class="flex items-center justify-center mt-10"> <!-- BOTAO SUBMIT -->
                    <!--<button type="submit" class="w-[15vh] h-[5vh] bg-[--azul-mais-claro] text-[2vh] text-green-500 rounded-2xl 
                    transition ease-in-out hover:scale-110 delay-150 duration-300 sombra_produtos">Entrar</button>-->
                    <router-link :to="`/administracao/opcoes`" type="submit" class="w-[15vh] h-[5vh] flex items-center justify-center bg-[--azul-mais-claro] text-[2vh] text-green-500 rounded-2xl 
                    transition ease-in-out hover:scale-110 duration-300 sombra_produtos">Entrar</router-link>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
export default {

}
</script>