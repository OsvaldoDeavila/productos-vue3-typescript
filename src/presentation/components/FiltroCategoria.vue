<script setup lang="ts">
defineProps<{
    modelo: string
    categorias: string[]
}>()

const emit = defineEmits<{
    (e: "update:modelo", valor: string): void
}>()
</script>

<template>
    <select :value="modelo" @change="emit('update:modelo', ($event.target as HTMLSelectElement).value)"
        class="border p-2 mb-6 rounded w-full">
        <option v-for="cat in categorias" :key="cat" :value="cat">
            {{ cat }}
        </option>
    </select>
</template>