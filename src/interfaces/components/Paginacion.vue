<script setup lang="ts">
defineProps<{
    paginaActual: number
    totalPaginas: number
}>()

const emit = defineEmits<{
    (e: "cambiarPagina", pagina: number): void
}>()
</script>

<template>
    <div class="flex justify-center mt-6 gap-2">
        <button class="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            Anterior
        </button>
        <button class="px-3 py-1 rounded border bg-indigo-600 text-white">
            1
        </button>
        <button class="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">
            2
        </button>
    </div>

    <div v-if="totalPaginas > 1" class="flex justify-center mt-8 gap-2">

        <button v-for="p in totalPaginas" :key="p" @click="emit('cambiarPagina', p)" :class="[
            'px-3 py-1 rounded border transition',
            paginaActual === p
                ? 'bg-indigo-600 text-white'
                : 'bg-white hover:bg-gray-100'
        ]">
            {{ p }}
        </button>

    </div>
</template>