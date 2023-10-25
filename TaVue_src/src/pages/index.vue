<script setup lang="">
  // Import components
  import Map from '@/components/Map.vue';
  import CardLunettes from '@/components/CardLunettes.vue';
  import Btn from '@/components/Btn.vue';

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
      <RouterLink class="absolute mt-60 text-blanc bg-blanc bg-opacity-5 h-12" to="/Personnalisation"><Btn text="Personnalisez vos lunettes"/></RouterLink>
    </div>
    <img src="/img/Img-home1.webp" alt="image femme lunettes">
    <img src="/img/Img-home2.webp" alt="image homme lunettes">
  </div>

  <section class="mx-5 lg:mx-20 mt-10">
    <h2 class="font-Khand text-2xl font-medium">Nos derniers produits</h2>
    <p class="max-w-[1200px] mt-3">Nos lunettes personnalisables offrent bien plus qu'un simple accessoire, elles représentent une opportunité d'exprimer votre style et de posséder un objet de qualité qui incarne votre individualité.</p>
    <p>Commencez avec le meilleur ! Découvrez nos modèles de lunettes et personnalisez les pour obtenir votre propre chef-d'œuvre.</p>

    <div class="space-y-32 my-20">
      <CardLunettes 
        titre="Elégance Parisienne"
        description="Découvrez notre modèle Élégance Parisienne, une paire de lunettes intemporelle qui confirme votre goût pour le style classique français. 
        Ancrées dans la tradition de la mode parisienne, ces lunettes allient le charme du passé et la modernité. Ne perdez pas l'opportunité d'ajouter une touche de Paris à votre look."  
        image="/img/elegance.webp"
      />

      <CardLunettes 
        titre="Horizon Brillant"
        description="Avec notre modèle Horizon Brillant, projetez-vous dans un futur radieux. Ces lunettes audacieuses confirment votre confiance envers un style innovant et avant-gardiste. Ancrées dans la recherche de l'excellence, elles reflètent une vision unique de la mode. Ne perdez pas de temps pour rejoindre l'avenir de la tendance."
        image="/img/elegance.webp"
      />

      <CardLunettes 
        titre="Visionnaire Minimaliste"
        description="Notre modèle Visionnaire Minimaliste incarne la simplicité et le contrôle de votre style. Ancré dans la philosophie du moins c'est plus, ces lunettes évoquent une élégance subtile. Vous n'avez rien à perdre en adoptant ce look épuré, mais vous avez tout à gagner en termes de sophistication."  
        image="/img/elegance.webp"
      />
    </div>
  </section>

  <section class="md:mt-36">
  <Map />
  </section>
</template>