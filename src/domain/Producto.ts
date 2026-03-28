export interface Calificacion {
    tasa: number
    cantidad: number
}

export interface Producto {
    id: number
    titulo: string
    precio: number
    descripcion: string
    categoria: string
    imagen: string
    calificacion: Calificacion
}