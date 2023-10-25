<script setup lang="ts">
  import { RouterView } from 'vue-router'
  // Import PocketBase
  import PocketBase from 'pocketbase'
  // Import components
  import HeaderPage from '@/components/HeaderPage.vue'
  import FooterPage from '@/components/FooterPage.vue'
  // PocketBase vps connexion
  var pocketbase_ip=''
  if(import.meta.env.MODE === 'production')
    pocketbase_ip='https://tavue.nino-da-silva.fr/'
  else
    pocketbase_ip='http://127.0.0.1:8090'

  const pb = new PocketBase(pocketbase_ip)

</script>

<template>
  <HeaderPage />
  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>w
  <FooterPage />
</template>
