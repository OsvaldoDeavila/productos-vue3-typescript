<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { ObtenerDetalleProducto } from "@/domain/use-cases/productos/ObtenerDetalleProducto";
import { ProductoApi } from "@/infrastructure/api/ProductApi";
import { router } from "@/router";

const producto = ref<any>(null);
const route = useRoute();

const mostrarEnvio = ref(false);
const mostrarContacto = ref(false);

const casoUso = new ObtenerDetalleProducto(new ProductoApi());

onMounted(async () => {
    producto.value = await casoUso.onVerDetalles(Number(route.params.id));
});

function onVolver() {
    router.push({
        name: "lista-productos"
    });
}
</script>

<template>

    <div class="space-y-2">

        <button @click="onVolver" class="flex items-center gap-2 text-sm text-slate-500 
           hover:text-indigo-600 transition group mt-2">
            <span class="transition-transform duration-200 group-hover:-translate-x-1">
                ←
            </span>
            <span class="font-medium">Volver a productos</span>
        </button>

    </div>

    <div v-if="producto"
        class="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4 md:px-6 xl:px-20">

        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">


            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex items-center justify-center">
                <img :src="producto.imagen"
                    class="max-h-[400px] object-contain transition-transform duration-300 hover:scale-105" />
            </div>

            <div class="space-y-6">

                <div class="space-y-2">
                    <p class="text-xs uppercase tracking-wide text-slate-400">
                        {{ producto.categoria }}
                    </p>

                    <h1 class="text-3xl font-bold text-slate-900 leading-tight">
                        {{ producto.titulo }}
                    </h1>
                </div>

                <div class="flex items-center gap-2 text-sm text-slate-600">
                    <span class="text-amber-400">★</span>
                    <span class="font-medium text-slate-700">
                        {{ producto.calificacion?.tasa }}
                    </span>
                    <span class="text-slate-400">
                        ({{ producto.calificacion?.cantidad }} reseñas)
                    </span>
                </div>

                <div class="text-3xl font-bold text-indigo-600">
                    ${{ producto.precio }}
                </div>

                <button class="w-full bg-indigo-600 text-white py-3 rounded-xl 
               hover:bg-indigo-700 active:scale-[0.99]
               transition-all duration-200 shadow-sm">
                    Comprar ahora
                </button>

                <p class="text-slate-600 leading-relaxed">
                    {{ producto.descripcion }}
                </p>

                <div class="divide-y border-t border-b rounded-xl bg-white">

                    <div class="p-4">
                        <div @click="mostrarEnvio = !mostrarEnvio"
                            class="flex justify-between items-center cursor-pointer">
                            <p class="font-medium text-slate-800">Envíos y devoluciones</p>
                            <span class="transition-transform" :class="{ 'rotate-180': mostrarEnvio }">⌄</span>
                        </div>

                        <div v-if="mostrarEnvio" class="mt-3 text-sm text-slate-600">
                            Los costos de envío no son reembolsables. El cliente asume el retorno.
                        </div>
                    </div>

                    <div class="p-4">
                        <div @click="mostrarContacto = !mostrarContacto"
                            class="flex justify-between items-center cursor-pointer">
                            <p class="font-medium text-slate-800">Contacto</p>
                            <span class="transition-transform" :class="{ 'rotate-180': mostrarContacto }">⌄</span>
                        </div>

                        <div v-if="mostrarContacto" class="mt-3 text-sm text-slate-600">
                            Escríbenos para más información sobre este producto.
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>

    <div v-else class="flex justify-center items-center min-h-screen text-slate-400">
        Cargando producto...
    </div>

</template>