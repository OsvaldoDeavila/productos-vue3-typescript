import type { ProductoRepositorio } from "../domain/ProductoRepositorio";

export class ObtenerProductos {
    private repositorio: ProductoRepositorio;

    constructor(repositorio: ProductoRepositorio) {
        this.repositorio = repositorio;
    }

    onListaProductos() {
        return this.repositorio.obtenerTodos();
    }
}