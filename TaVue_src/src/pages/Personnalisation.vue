<script setup lang="ts">
// Import components
import Promo from '@/components/Promo.vue';
import Btn from '@/components/Btn.vue';

  import type { Lunette } from "@/types" 
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import lunettes from "@/components/LunettesVue.vue";
  import FormKitListColors from "@/components/FormKitListColors.vue";

  const lunette = ref({});

//
import { isConnected } from '@/backend'

if(!isConnected()){
  window.location.href = "/Compte"
}


//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Personnalisation - TaVue'
}) 
//
</script>

<template>
  <Promo />

  <div class="p-2">
    <div class="row w-64">
      <lunettes class="carousel-item w-64" v-bind="lunette" />
    </div>
    <FormKit type="form" v-model="lunette" @submit="">
      <FormKitListColors name="branches" label="branches" />
      <FormKitListColors name="cadre" label="cadre" />
      <FormKitListColors name="verres" label="verres" />

      <FormKit name="Commander" label="Commander" type="checkbox"  />
    </FormKit>
  </div>
  
  
  <!-- <div class="mx-5 lg:mr-20 lg:ml-10 lg:dispo items-center">
    <div class="mx-auto max-lg:mt-14 max-lg:ml-16">
      <img class="text-center" src="/img/elegance.webp" alt="rendu personnalisation">
      <div class="font-medium mt-5 lg:mt-20 lg:ml-10 text-base lg:text-lg font-Khand">Prix de vente :  85€</div>
    </div>
    
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
          <button class="w-14 h-8 border cursor-pointer bg-noir"></button>
          <button class="w-14 h-8 border cursor-pointer bg-gris"></button>
          <button class="w-14 h-8 border cursor-pointer bg-rouge"></button>
          <button class="w-14 h-8 border cursor-pointer bg-bleu"></button>
        </div>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>
      </div>

      <div>
        <div class="flex gap-6 items-center">
          <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Verres</h3>
          <button class="w-14 h-8 border cursor-pointer bg-noir"></button>
          <button class="w-14 h-8 border cursor-pointer bg-gris"></button>
          <button class="w-14 h-8 border cursor-pointer bg-rouge"></button>
          <button class="w-14 h-8 border cursor-pointer bg-bleu"></button>
        </div>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>
      </div>

      <div>
        <div class="flex gap-6 items-center">
          <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Branches</h3>
          <button class="w-14 h-8 border cursor-pointer bg-noir"></button>
          <button class="w-14 h-8 border cursor-pointer bg-gris"></button>
          <button class="w-14 h-8 border cursor-pointer bg-rouge"></button>
          <button class="w-14 h-8 border cursor-pointer bg-bleu"></button>
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
  </div> -->

</template>