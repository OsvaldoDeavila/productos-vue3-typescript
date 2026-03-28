<script setup lang="ts">

const props = defineProps<{
    paginaActual: number
    totalPaginas: number
    porPagina: number
    totalResultados: number
}>()

const emit = defineEmits<{
    (e: "cambiarPagina", pagina: number): void
}>()
</script>

<template>

    <div v-if="totalPaginas > 1" class="flex flex-col md:flex-row items-center justify-between gap-4 mt-10">


        <p class="text-sm text-slate-500">
            Mostrando
            <span class="font-semibold text-slate-700">
                {{ (paginaActual - 1) * porPagina + 1 }}
            </span>
            -
            <span class="font-semibold text-slate-700">
                {{ Math.min(paginaActual * porPagina, totalResultados) }}
            </span>
            de
            <span class="font-semibold text-slate-700">
                {{ totalResultados }}
            </span>
            resultados
        </p>

        <div class="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 shadow-sm">


            <button @click="emit('cambiarPagina', paginaActual - 1)" :disabled="paginaActual === 1"
                class="px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition">
                ←
            </button>

            <span class="px-3 py-1.5 text-sm font-medium text-slate-700">
                {{ paginaActual }} / {{ totalPaginas }}
            </span>

            <button @click="emit('cambiarPagina', paginaActual + 1)" :disabled="paginaActual === totalPaginas"
                class="px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition">
                →
            </button>

        </div>

    </div>
</template>