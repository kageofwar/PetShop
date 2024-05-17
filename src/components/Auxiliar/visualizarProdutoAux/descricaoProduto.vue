<template>
  <div id="box" class="bg-white rounded-[15px] h-10 transition-height duration-1000 overflow-auto">
    <div class="flex items-center justify-center text-[3.7vh] font-semibold">
      <img src="../../../assets/icons/MoreDetails.png" class="h-10">
      <h2>Descrição do Produto</h2>
    </div>
    <div class="break-words overflow-auto">
      <p>Ração Pedigree Cães Adultos Raças Pequenas e Minis Carne e Vegetais
        A Ração Pedigree Cães Adultos Raças Pequenas e Minis Carne e Vegetais é produzida sob rigorosos padrões de
        qualidade para garantir uma nutrição completa e equilibrada para seu cão adulto de pequeno porte.  Essa Ração
        Pedigree é feita com ingredientes cuidadosamente selecionados como antioxidantes, selênio e vitamina E, que
        ajudam o sistema imunológico do seu cachorrinho. Com uma combinação de carne e vegetais, rico em fibras e
        proteínas de alta qualidade que contribuem para uma ótima digestão e fezes firmes fáceis de limpar.  Além disso,
        a Ração Pedigree para Raças Pequenas contém Ômega 6 garantindo pele e pelos saudáveis. Não possui corantes ou
        aromatizantes artificiais e tem em sua formulação 24 vitaminas e minerais promovendo qualidade de vida para seu
        pet.  No PetFuad você encontra uma grande variedade de rações e a Ração Pedigree Cães Adultos Raças Pequenas e
        Minis com preço incrível. No app, no site ou em nossas lojas físicas.</p>
        <h2>Ingerdientes</h2>
        <p>Farinha de Carne e Ossos de Bovinos, Farinha de Subprodutos de Frango, Milho Integral Moído*, Gordura de
          Aves, Farelo de Soja**, Glúten de Milho*, Cenoura, Espinafre, Metionina, Vitaminas (Vitamina A (Retinol), D3
          (Colecalciferol), E (acetato DL Alfa-Tocoferol), B1 (Tiamina), B2 (Riboflavina), B6 (Piridoxina), B12
          (Cianocobalamina), Niacina, Ácido Pantotênico, Ácido Fólico e Cloreto de Colina), Minerais (Cloreto de Sódio -
          sal comum, Óxido de Zinco, Cloreto de Potássio, Sulfato de Cobre, Iodato de Cálcio e Selenito de Sódio),
          Hidrolisado de Fígado de Ave e Suíno, Aluminosilicato, BHT e Corante Caramelo IV</p>
      <p>Ração Pedigree Cães Adultos Raças Pequenas e Minis Carne e Vegetais
        A Ração Pedigree Cães Adultos Raças Pequenas e Minis Carne e Vegetais é produzida sob rigorosos padrões de
        qualidade para garantir uma nutrição completa e equilibrada para seu cão adulto de pequeno porte.  Essa Ração
        Pedigree é feita com ingredientes cuidadosamente selecionados como antioxidantes, selênio e vitamina E, que
        ajudam o sistema imunológico do seu cachorrinho. Com uma combinação de carne e vegetais, rico em fibras e
        proteínas de alta qualidade que contribuem para uma ótima digestão e fezes firmes fáceis de limpar.  Além disso,
        a Ração Pedigree para Raças Pequenas contém Ômega 6 garantindo pele e pelos saudáveis. Não possui corantes ou
        aromatizantes artificiais e tem em sua formulação 24 vitaminas e minerais promovendo qualidade de vida para seu
        pet.  No PetFuad você encontra uma grande variedade de rações e a Ração Pedigree Cães Adultos Raças Pequenas e
        Minis com preço incrível. No app, no site ou em nossas lojas físicas.</p>
        <h2>Ingerdientes</h2>
        <p>Farinha de Carne e Ossos de Bovinos, Farinha de Subprodutos de Frango, Milho Integral Moído*, Gordura de
          Aves, Farelo de Soja**, Glúten de Milho*, Cenoura, Espinafre, Metionina, Vitaminas (Vitamina A (Retinol), D3
          (Colecalciferol), E (acetato DL Alfa-Tocoferol), B1 (Tiamina), B2 (Riboflavina), B6 (Piridoxina), B12
          (Cianocobalamina), Niacina, Ácido Pantotênico, Ácido Fólico e Cloreto de Colina), Minerais (Cloreto de Sódio -
          sal comum, Óxido de Zinco, Cloreto de Potássio, Sulfato de Cobre, Iodato de Cálcio e Selenito de Sódio),
          Hidrolisado de Fígado de Ave e Suíno, Aluminosilicato, BHT e Corante Caramelo IV</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById('box').style.height = '50vh';
    document.getElementById('box').addEventListener('click', function (e) {
      e.currentTarget.style.height = e.currentTarget.style.height === '50vh' ?
        e.currentTarget.style.height = '5.5vh' :
        e.currentTarget.style.height = '50vh';
    })
  }
}
</script>