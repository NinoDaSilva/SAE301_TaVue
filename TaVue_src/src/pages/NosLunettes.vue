<script setup lang="">
// Import components
import CardLunettes from '@/components/CardLunettes.vue';

//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos lunettes - TaVue'
}) 
//
</script>

<template>
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
        image="/img/horizon.webp"
      />

      <CardLunettes 
        titre="Visionnaire Minimaliste"
        description="Notre modèle Visionnaire Minimaliste incarne la simplicité et le contrôle de votre style. Ancré dans la philosophie du moins c'est plus, ces lunettes évoquent une élégance subtile. Vous n'avez rien à perdre en adoptant ce look épuré, mais vous avez tout à gagner en termes de sophistication."  
        image="/img/visionnaire.webp"
      />
    </div>
</template>