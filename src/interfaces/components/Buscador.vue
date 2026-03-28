<script setup lang="ts">
defineProps<{
    modelo: string
}>()

const emit = defineEmits<{
    (e: "update:modelo", valor: string): void
}>()
</script>

<template>
    <input :value="modelo" @input="emit('update:modelo', ($event.target as HTMLInputElement).value)"
        placeholder="Buscar producto..." class="border p-2 w-full mb-4 rounded" />
</template>