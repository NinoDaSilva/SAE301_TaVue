<script setup lang="ts">
import { colors } from "@/types";
defineProps<{
  name?: string;
  label?: string;
}>();
</script>
<template>
  <FormKit
    :name="name"
    value="#000000"
    type="radio"
    :options="colors"
    :sections-schema="{
        inner: { $el: null },
        decorator: { $el:null },
    }" 
    input-class="" 
    options-class="flex gap-7">
    
        <template #label="context">
            <div class="h-8 w-11 mt-2 -ml-2 border-special border-2" :style="{ backgroundColor: context.option.value}"></div>
        </template>
    </FormKit>
</template>