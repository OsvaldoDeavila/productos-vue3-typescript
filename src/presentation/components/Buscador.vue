<script setup lang="ts">
defineProps<{
    modelo: string
}>()

const emit = defineEmits<{
    (e: "update:modelo", valor: string): void
}>()
</script>

<template>

    <div class="relative">

        <input :value="modelo" @input="emit('update:modelo', ($event.target as HTMLInputElement).value)"
            placeholder="Buscar producto..." class="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 
           bg-slate-50 focus:bg-white
           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
           outline-none transition-all duration-200
           text-slate-700 placeholder-slate-400 shadow-sm" />


        <svg class="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>

    </div>
</template>