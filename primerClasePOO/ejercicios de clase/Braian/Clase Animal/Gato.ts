import { Animal } from "./Animal";
import { Mascotas } from "./Mascota";



export class Gato extends Animal implements Mascotas {

    protected nombreAnimal: string;

    constructor(pNombreAnimal: string, pPatas: number) {
        super(pPatas);
        this.nombreAnimal = pNombreAnimal;
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
    public caminar(cantidadPatas: number): void {
        console.log(this.nombreAnimal + " " + "Esta caminando en " + cantidadPatas);
    }
}
