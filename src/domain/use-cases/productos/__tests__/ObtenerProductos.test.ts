import { describe, it, expect, vi } from "vitest";
import { ObtenerProductos } from "../ObtenerProductos";

describe("ObtenerProductos", () => {

    it("debe retornar lista de productos", async () => {

        const apiMock = {
            obtenerTodos: vi.fn().mockResolvedValue([
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
        } as any;

        const casoUso = new ObtenerProductos(apiMock);

        const resultado = await casoUso.onListaProductos();

        expect(resultado.length).toBe(1);
        expect(resultado[0].titulo).toBe("Producto test");
    });

});