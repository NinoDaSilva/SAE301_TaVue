<script setup lang="ts">
    // Import components
    import Btn from './Btn.vue';
    import IconTrash from './icons/IconTrash.vue';
</script>

<template>
    <div>
        <div></div>
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div>
            <Btn text="Commander |">
                <template #icon>
                    <!-- {{ prix }} -->
                </template>
            </Btn>

            <Btn text="Supprimer" >
                <template #icon>
                    <IconTrash />
                </template>
            </Btn>
        </div>
    </div>
</template>