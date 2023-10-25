<script setup lang="ts">
  // Import components
  import Map from '@/components/Map.vue';

  //
  import {useHead} from '@unhead/vue'
  useHead ({
    title: 'Accueil - TaVue'
  }) 
  //
</script>

<template>
  <div class="relative grid grid-cols-2 text-center">
    <div class="absolute flex w-full h-full items-center justify-center">
      <p class="title-shadow w-[500px] md:w-[700px] md:text-lg text-blanc font-semibold lg:w-[900px] lg:text-xl">N'attendez pas ! Personnalisez vos lunettes maintenant et ne manquez pas l'occasion d'obtenir le modèle qui vous correspond</p>
    </div>
    <img src="/img/Img-home1.webp" alt="image femme lunettes">
    <img src="/img/Img-home2.webp" alt="image homme lunettes">
  </div>

  <section>
    <h2>Nos derniers produits</h2>
    <p>Nos lunettes personnalisables offrent bien plus qu'un simple accessoire, elles représentent une opportunité d'exprimer votre style et de posséder un objet de qualité qui incarne votre individualité.
      Commencez avec le meilleur ! Découvrez nos modèles de lunettes et personnalisez les pour obtenir votre propre chef-d'œuvre.
    </p>

  </section>

  <section>
  <Map />
  </section>
</template>