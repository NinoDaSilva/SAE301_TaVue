<script setup lang="ts">
import Btn from './Btn.vue';

defineProps<{
    titre: string,
    description: string,
    image: string,
}>();
</script>

<template>
    <div class="md:home-card max-w-[1920px]">
        <img class="max-w-[345px] mx-auto mt-14" :src=image alt="photo lunettes">
        <div class="max-w-[800px]">
            <h3 class="title-shadow font-Khand text-headings mb-2 text-xl font-medium">{{ titre }}</h3>
            <p class="mb-5"> {{ description }}</p>
            <RouterLink to="/Personnalisation"><Btn class="max-w-[285px] h-14" text="Personnaliser votre montre"/></RouterLink>
        </div>
    </div>
</template>