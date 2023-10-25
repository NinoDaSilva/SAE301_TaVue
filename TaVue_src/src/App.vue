<script setup lang="">
  import { RouterView } from 'vue-router'
  
  // Import components
  import HeaderPage from '@/components/HeaderPage.vue'
  import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <HeaderPage />
  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <FooterPage />
</template>
