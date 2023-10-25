<script setup lang="ts">
defineProps<{
    text: string,
}>();
</script>

<template>
    <div class="flex border-2 px-10 py-2 font-semibold items-center">
        <slot name="icon"></slot>
        {{ text }}
    </div>
</template>