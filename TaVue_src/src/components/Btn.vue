<script setup lang="ts">
defineProps<{
    text: string,
}>();
</script>

<template>
    <div class="flex justify-center border-2 px-10 py-2 font-semibold items-center hover-btn cursor-pointer">
        <slot name="icon"></slot>
        {{ text }}
    </div>
</template>