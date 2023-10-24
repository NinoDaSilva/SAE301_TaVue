<script setup lang="ts">

//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Page introuvable - 404'
}) 
//
</script>

<template>
    <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <h1 class="mb-4 text-3xl font-bold tracking-tight text-brun">Erreur 404</h1>
      <p class="max-sm:mt-8 text-base font-semibold text-vert">Oups !</p>
      <p class="mt-6 sm:text-base sm:leading-7 text-vertFonce">Désolé, nous n'avons pas trouvé la page que vous recherchez.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink to="/" class="rounded-3xl bg-special px-8 py-3 font-semibold text-blanc shadow-sm hover:bg-vert focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-200">Retour à la page d'accueil</RouterLink>
      </div>
    </div>
  </main>
</template>