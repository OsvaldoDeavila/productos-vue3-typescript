import { createRouter, createWebHistory } from "vue-router";

// Vistas
import ListaProductosView from "@/interfaces/views/ListaProductosView.vue";
import DetalleProductoView from "@/interfaces/views/DetalleProductoView.vue";

const routes = [
    {
        path: "/",
        name: "lista-productos",
        component: ListaProductosView,
    },
    {
        path: "/producto/:id",
        name: "detalle-producto",
        component: DetalleProductoView,
        props: true,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});