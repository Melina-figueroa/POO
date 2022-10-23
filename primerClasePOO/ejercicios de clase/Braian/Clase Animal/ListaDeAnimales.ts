import { Animal } from "./Animal";

export class ListaDeAnimales {

    private listaDeAnimales = new Array<Animal>;

    constructor(pListaDeAnimales: Array<Animal>) {
        this.listaDeAnimales = pListaDeAnimales;
    }

    public buscarAnimal(pAnimal: Animal): string {
        let respuesta: string = ' ';
        for (let i: number = 0; i < this.listaDeAnimales.length; + i++) {
            let posicion: number = -1;
            if (this.listaDeAnimales[i] === pAnimal) {
                respuesta = 'Animal encontrado en ' + posicion;
            }
            respuesta = 'Animal no encontrado ' + posicion;
        }
        return respuesta;
    }
    public agregarAnimal(pAgregarAnimal: Animal):void {
        this.listaDeAnimales.push(pAgregarAnimal);
    }
    public removerAnimal(pElimarAnimal: Animal): void {
        for (let i: number = 0; i < this.listaDeAnimales.length; i++) {
            if (this.listaDeAnimales[i] === pElimarAnimal) {
                this.listaDeAnimales.splice(i, 1);
            }

        }
    }
}