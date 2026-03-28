<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { ObtenerDetalleProducto } from "@/domain/use-cases/productos/ObtenerDetalleProducto";
import { ProductoApi } from "@/infrastructure/api/ProductApi.ts";

const producto = ref<any>(null);
const route = useRoute();

const casoUso = new ObtenerDetalleProducto(new ProductoApi());

onMounted(async () => {
    producto.value = await casoUso.onVerDetalles(Number(route.params.id));
});
</script>

<template>
    <div v-if="producto" class="p-6">
        <img :src="producto.imagen" class="h-60" />
        <h1 class="text-2xl font-bold">{{ producto.titulo }}</h1>
        <p>{{ producto.descripcion }}</p>
        <p class="text-xl">${{ producto.precio }}</p>
    </div>
</template>