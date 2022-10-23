export abstract class Animal {
    protected cantidadPatas: number;
    constructor(pPatas: number) {
        this.cantidadPatas = pPatas;
    }
    public ingresarPatas(pPatas: number): void {
        this.cantidadPatas = pPatas;
    }
    public obtenerPatas(): number {
        return this.cantidadPatas;
    }
    abstract comer(): void;
    abstract caminar(cantidadPatas: number): void;
}