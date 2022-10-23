import { Animal } from "./Animal";

export class Araña extends Animal {

    constructor(pPatas: number) {
        super(pPatas);
    }
    public comer(): void {
        console.log('Esta comiendo');
    }
    public caminar(cantidadPatas: number): void {
        console.log('Esta caminando en' + ' ' + cantidadPatas);
    }

}