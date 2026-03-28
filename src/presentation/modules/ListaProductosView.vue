<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import TarjetaProducto from "@/presentation/components/TarjetaProducto.vue";

import { ObtenerProductos } from "@/domain/use-cases/productos/ObtenerProductos";
import { ProductoApi } from "@/infrastructure/api/ProductApi";

import Paginacion from "@/presentation/components/Paginacion.vue";
import Buscador from "@/presentation/components/Buscador.vue";
import FiltroCategoria from "@/presentation/components/FiltroCategoria.vue";
import EstadoVacio from "@/presentation/components/EstadoVacio.vue";


const productos = ref<any[]>([]);
const cargando = ref(true);

const busqueda = ref("");
const categoria = ref("todas");

const pagina = ref(1);
const porPagina = 6;

const UsoProductos = new ObtenerProductos(new ProductoApi());

onMounted(async () => {
    try {
        productos.value = await UsoProductos.onListaProductos();
    } catch (error) {
        console.error(error);
    } finally {
        cargando.value = false;
    }
});


const categorias = computed(() => {
    const lista = productos.value.map(p => p.categoria);
    return ["todas", ...new Set(lista)];
});


const productosFiltrados = computed(() => {
    return productos.value.filter(p => {
        const coincideNombre = p.titulo
            .toLowerCase()
            .includes(busqueda.value.toLowerCase());

        const coincideCategoria =
            categoria.value === "todas" || p.categoria === categoria.value;

        return coincideNombre && coincideCategoria;
    });
});

const totalPaginas = computed(() =>
    Math.ceil(productosFiltrados.value.length / porPagina)
);

const productosPaginados = computed(() => {
    const inicio = (pagina.value - 1) * porPagina;
    return productosFiltrados.value.slice(inicio, inicio + porPagina);
});


</script>

<template>

    <div class="bg-gray-100 min-h-screen py-6">
        <div class="max-w-7xl mx-auto px-4">

            <!-- Título -->
            <h1 class="text-2xl font-bold mb-6">Productos</h1>

            <Buscador :modelo="busqueda" @update:modelo="(val) => { busqueda = val; pagina = 1 }" />

            <FiltroCategoria :modelo="categoria" :categorias="categorias"
                @update:modelo="(val) => { categoria = val; pagina = 1 }" />

            <div v-if="cargando" class="text-center py-10">
                Cargando productos...
            </div>

            <EstadoVacio v-else-if="productosFiltrados.length === 0" />

            <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <TarjetaProducto v-for="producto in productosPaginados" :key="producto.id" :producto="producto" />
            </div>

            <div v-if="totalPaginas > 1" class="flex justify-center mt-8 gap-2">
                <Paginacion :paginaActual="pagina" :totalPaginas="totalPaginas" @cambiarPagina="pagina = $event" />
            </div>

        </div>
    </div>
</template>