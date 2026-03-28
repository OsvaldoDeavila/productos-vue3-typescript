import { describe, it, expect, vi } from "vitest";
import { ObtenerProductos } from "../ObtenerProductos";
import { ProductoApi } from "@/infrastructure/api/ProductApi";

describe("ObtenerProductos", () => {

    it("debe retornar lista de productos", async () => {

        const apiMock = {
            onListaProductos: vi.fn().mockResolvedValue([
                {
                    id: 1,
                    titulo: "Producto test",
                    precio: 100,
                    descripcion: "demo",
                    categoria: "test",
                    imagen: "img",
                    calificacion: { tasa: 4, cantidad: 10 }
                }
            ])
        } as unknown as ProductoApi;

        const casoUso = new ObtenerProductos(apiMock);

        const resultado = await casoUso.onListaProductos();

        expect(resultado.length).toBe(1);
        expect(resultado[0].titulo).toBe("Producto test");
    });

});