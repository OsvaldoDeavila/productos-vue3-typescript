import type { ProductoRepositorio } from "@/domain/repository/ProductoRepositorio";

export class ObtenerProductos {
    private repositorio: ProductoRepositorio;

    constructor(repositorio: ProductoRepositorio) {
        this.repositorio = repositorio;
    }

    onListaProductos() {
        return this.repositorio.obtenerTodos();
    }
}