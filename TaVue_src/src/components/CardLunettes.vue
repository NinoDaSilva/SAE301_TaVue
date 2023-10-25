<script setup lang="ts">
defineProps<{
    titre: string,
    description: string,
    image: string,
}>();
</script>

<template>
    <img :src=image alt="photo lunettes">
    <div>
        <h3>{{ titre }}</h3>
        <p> {{ description }}</p>
    </div>
</template>