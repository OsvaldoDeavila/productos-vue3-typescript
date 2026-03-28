<script setup lang="ts">
defineProps<{
    producto: any
}>()
</script>


<template>
    <div class="bg-white shadow-md rounded-lg max-w-sm hover:shadow-xl transition duration-300">
        <a href="#">
            <img class="rounded-t-lg p-4 h-52 object-contain w-full" :src="producto.imagen" :alt="producto.titulo" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h3 class="text-gray-900 font-semibold text-lg tracking-tight line-clamp-2">
                    {{ producto.titulo }}
                </h3>
            </a>
            <div class="flex items-center mt-2.5 mb-4">
                <template v-for="i in 5" :key="i">
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </template>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
                    {{ producto.calificacion.tasa }}
                </span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-gray-900">${{ producto.precio }}</span>
                <button
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                    Agregar
                </button>
            </div>
        </div>
    </div>
</template>