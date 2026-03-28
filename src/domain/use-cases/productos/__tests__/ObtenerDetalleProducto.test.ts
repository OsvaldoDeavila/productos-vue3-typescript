import { describe, it, expect, vi } from "vitest";
import { ObtenerDetalleProducto } from "../ObtenerDetalleProducto";


describe("ObtenerDetalleProducto", () => {

    it("debe retornar un producto por id", async () => {

        const apiMock = {
            obtenerPorId: vi.fn().mockResolvedValue({
                id: 1,
                titulo: "Producto detalle",
                precio: 200,
                descripcion: "detalle",
                categoria: "test",
                imagen: "img",
                calificacion: { tasa: 5, cantidad: 20 }
            })
        } as any;

        const casoUso = new ObtenerDetalleProducto(apiMock);

        const resultado = await casoUso.onVerDetalles(1);

        expect(apiMock.obtenerPorId).toHaveBeenCalledWith(1);
        expect(resultado.id).toBe(1);
        expect(resultado.titulo).toBe("Producto detalle");
    });

});