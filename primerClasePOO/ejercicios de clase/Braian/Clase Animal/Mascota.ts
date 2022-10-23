export interface Mascotas {
    ingresarNombre(pNombre: string): void;
    obtenerNombre(): string;
    jugar(pNombre: string): void;
}