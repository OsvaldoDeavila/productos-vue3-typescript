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

    <button @click="onVolver" class="mb-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium">
        ← Volver a productos
    </button>

    <div v-if="producto" class="md:flex items-start justify-center py-12 px-4 md:px-6 xl:px-20 bg-gray-50 min-h-screen">

        <div class="xl:w-2/6 lg:w-2/5 w-full">
            <img :src="producto.imagen" class="w-full object-contain rounded-lg bg-white p-4 shadow" />
        </div>

        <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 mt-6 md:mt-0">

            <div class="border-b pb-6">
                <p class="text-sm text-gray-500">{{ producto.categoria }}</p>
                <h1 class="text-2xl font-bold text-gray-800 mt-2">
                    {{ producto.titulo }}
                </h1>
            </div>

            <div class="py-4 border-b">
                <p class="text-3xl font-bold text-indigo-600">
                    ${{ producto.precio }}
                </p>
            </div>

            <button class="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
                Comprar ahora
            </button>

            <p class="text-gray-600 mt-6 leading-relaxed">
                {{ producto.descripcion }}
            </p>

            <p class="mt-4 text-yellow-500">
                ⭐ {{ producto.calificacion?.tasa }} ({{ producto.calificacion?.cantidad }})
            </p>

            <div class="border-t border-b py-4 mt-7">
                <div @click="mostrarEnvio = !mostrarEnvio" class="flex justify-between cursor-pointer">
                    <p class="text-gray-800 font-medium">Envíos y devoluciones</p>
                    <span :class="{ 'rotate-180': mostrarEnvio }">⌄</span>
                </div>

                <div v-if="mostrarEnvio" class="mt-4 text-gray-600">
                    Los costos de envío no son reembolsables. El cliente asume el retorno.
                </div>
            </div>

            <div class="border-b py-4">
                <div @click="mostrarContacto = !mostrarContacto" class="flex justify-between cursor-pointer">
                    <p class="text-gray-800 font-medium">Contacto</p>
                    <span :class="{ 'rotate-180': mostrarContacto }">⌄</span>
                </div>

                <div v-if="mostrarContacto" class="mt-4 text-gray-600">
                    Escríbenos para más información sobre este producto.
                </div>
            </div>

        </div>
    </div>

    <div v-else class="text-center py-20">
        Cargando producto...
    </div>
</template>