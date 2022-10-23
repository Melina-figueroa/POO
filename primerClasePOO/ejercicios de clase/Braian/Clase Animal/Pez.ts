import { Animal } from "./Animal";
import { Mascotas } from "./Mascota";

export class Pez extends Animal implements Mascotas {

    protected nombreAnimal: string;
    protected cantidadDeAletas: number;
    constructor(pNombreAnimal: string,pCantidadDeAletas: number,pPatas:number) {
        super(pPatas);
        this.nombreAnimal = pNombreAnimal;
        this.cantidadDeAletas = pCantidadDeAletas;
    }
    public ingresarNombre(pNombreAnimal: string): void {
        this.nombreAnimal = pNombreAnimal;
    }
    public obtenerNombre(): string {
        return this.nombreAnimal;
    }
    public jugar(pNombre: string): void {
        console.log(pNombre + " " + "Esta jugando");
    }
    public comer(): void {
        console.log(this.nombreAnimal + " " + "Esta Comiendo");
    }
    public caminar(pCantidadAletas: number): void {

        console.log(this.nombreAnimal + '' + 'Esta nadando en' + ' ' + pCantidadAletas)
    }
    public ingresarCantidadAletas(pCantidadAletas: number): void {
        this.cantidadDeAletas = pCantidadAletas;
    }
    public obtenerCantidadDeAletas(): number {
        return this.cantidadDeAletas;
    }
}
