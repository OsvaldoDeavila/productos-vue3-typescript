import type { ProductoRepositorio } from "@/domain/repository/ProductoRepositorio";

export class ObtenerDetalleProducto {
    private repositorio: ProductoRepositorio;

    constructor(repositorio: ProductoRepositorio) {
        this.repositorio = repositorio;
    }

    onVerDetalles(id: number) {
        return this.repositorio.obtenerPorId(id);
    }
}