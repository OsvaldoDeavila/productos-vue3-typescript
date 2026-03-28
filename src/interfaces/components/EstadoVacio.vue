<script setup lang="ts">
defineProps<{
    mensaje?: string
}>()
</script>

<template>
    <div class="text-center py-10 text-gray-500">
        {{ mensaje || "No hay resultados disponibles 😢" }}
    </div>
</template>