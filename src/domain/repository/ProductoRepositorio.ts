import type { Producto } from "../entities/products/Producto";

export interface ProductoRepositorio {
    obtenerTodos(): Promise<Producto[]>;
    obtenerPorId(id: number): Promise<Producto>;
}