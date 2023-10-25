<script setup lang="ts">
// Import components
import Promo from '@/components/Promo.vue';
import Btn from '@/components/Btn.vue';

//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Personnalisation - TaVue'
}) 
//
</script>

<template>
  <Promo />

  <div class="mx-5 lg:mr-20 lg:ml-10 lg:dispo items-center">
    <img class="text-center max-lg:mt-14 max-lg:ml-16" src="/img/elegance.webp" alt="rendu personnalisation">

    <div class="space-y-12 md:ml-20 mx-auto my-20 max-w-[650px]">
      <div>
        <div class="flex gap-4 items-center">
          <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Type</h3>
          <Btn class="w-[180px] text-2xs" text="Rectangulaire" />
          <Btn class="w-[130px] text-2xs" text="Ronde" />
        </div>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>
      </div>

      <div>
        <div class="flex gap-6 items-center">
          <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Cadre</h3>
          <div class="w-14 h-8 border cursor-pointer bg-noir"></div>
          <div class="w-14 h-8 border cursor-pointer bg-gris"></div>
          <div class="w-14 h-8 border cursor-pointer bg-rouge"></div>
          <div class="w-14 h-8 border cursor-pointer bg-bleu"></div>
        </div>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>
      </div>

      <div>
        <div class="flex gap-6 items-center">
          <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Verres</h3>
          <div class="w-14 h-8 border cursor-pointer bg-noir"></div>
          <div class="w-14 h-8 border cursor-pointer bg-gris"></div>
          <div class="w-14 h-8 border cursor-pointer bg-rouge"></div>
          <div class="w-14 h-8 border cursor-pointer bg-bleu"></div>
        </div>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>
      </div>

      <div>
        <div class="flex gap-6 items-center">
          <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Branches</h3>
          <div class="w-14 h-8 border cursor-pointer bg-noir"></div>
          <div class="w-14 h-8 border cursor-pointer bg-gris"></div>
          <div class="w-14 h-8 border cursor-pointer bg-rouge"></div>
          <div class="w-14 h-8 border cursor-pointer bg-bleu"></div>
        </div>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>
      </div>

      <div class="pt-6">
        <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Descriptif</h3>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>
        <p class="mt-4">Nos lunettes personnalisables offrent bien plus qu'un simple accessoire, elles représentent une opportunité d'exprimer votre <strong>style</strong> et de posséder un <strong>objet de qualité</strong> qui incarne votre individualité.</p>
      </div>

      <Btn class="sm:w-80 h-14" text="Enregistrer mes choix" />
    </div>
  </div>

</template>