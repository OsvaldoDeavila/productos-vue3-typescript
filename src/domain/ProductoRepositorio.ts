import type { Producto } from "./Producto";

export interface ProductoRepositorio {
    obtenerTodos(): Promise<Producto[]>;
    obtenerPorId(id: number): Promise<Producto>;
}