import type { ProductoRepositorio } from "@/domain/ProductoRepositorio";
import type { Producto } from "@/domain/Producto";

const API_URL = import.meta.env.VITE_API_URL;

export class ProductoApi implements ProductoRepositorio {

    async obtenerTodos(): Promise<Producto[]> {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error("Error al obtener productos");
        }

        const data = await respuesta.json();

        return data.map(this.mapearProducto);
    }

    async obtenerPorId(id: number): Promise<Producto> {
        const respuesta = await fetch(`${API_URL}/${id}`);

        if (!respuesta.ok) {
            throw new Error("Error al obtener el producto");
        }

        const data = await respuesta.json();

        return this.mapearProducto(data);
    }

    private mapearProducto(data: any): Producto {
        return {
            id: data.id,
            titulo: data.title,
            precio: data.price,
            descripcion: data.description,
            categoria: data.category,
            imagen: data.image,
            calificacion: {
                tasa: data.rating?.rate ?? 0,
                cantidad: data.rating?.count ?? 0,
            },
        };
    }
}