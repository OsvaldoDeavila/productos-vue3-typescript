<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Producto } from "@/domain/entities/products/Producto";

const props = defineProps<{
    producto: Producto;
}>();

const router = useRouter();

function onVerDetalles() {
    router.push({
        name: "detalle-producto",
        params: { id: props.producto.id }
    });
}
</script>


<template>
    <div class="group bg-white rounded-2xl border border-slate-200 
         hover:shadow-lg hover:-translate-y-1 
         transition-all duration-300 cursor-pointer overflow-hidden" @click="onVerDetalles">

        <!-- Imagen -->
        <div class="bg-slate-50 p-6 flex items-center justify-center">
            <img class="h-44 object-contain transition-transform duration-300 group-hover:scale-105"
                :src="producto.imagen" :alt="producto.titulo" />
        </div>

        <!-- Contenido -->
        <div class="p-5 space-y-3">

            <!-- Título -->
            <h4 class="text-slate-800 font-semibold text-base leading-snug line-clamp-2">
                {{ producto.titulo }}
            </h4>

            <!-- Rating -->
            <div class="flex items-center justify-between">

                <div class="flex items-center gap-1">
                    <template v-for="i in 5" :key="i">
                        <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </template>
                </div>

                <span class="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded-lg">
                    {{ producto.calificacion.tasa }}
                </span>

            </div>

            <!-- Precio -->
            <div class="flex items-center justify-between pt-2">

                <span class="text-xl font-bold text-slate-900">
                    ${{ producto.precio }}
                </span>

                <!-- Botón sutil -->
                <button class="text-sm font-medium text-blue-600 hover:text-blue-700 transition">
                    Ver →
                </button>

            </div>

        </div>

    </div>
</template>