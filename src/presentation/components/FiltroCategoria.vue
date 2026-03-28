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
    <select :value="modelo" @change="emit('update:modelo', ($event.target as HTMLSelectElement).value)" class="w-full px-4 py-3 rounded-xl border border-slate-200 
         bg-slate-50 focus:bg-white
         focus:ring-2 focus:ring-blue-500 focus:border-blue-500
         outline-none transition-all duration-200
         text-slate-700 shadow-sm">
        <option v-for="cat in categorias" :key="cat" :value="cat">
            {{ cat }}
        </option>
    </select>
</template>