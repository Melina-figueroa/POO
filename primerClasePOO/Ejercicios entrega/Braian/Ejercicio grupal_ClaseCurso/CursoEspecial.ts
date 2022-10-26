import { Curso } from "./Curso";

export class CursoEspecial extends Curso {
    private notaMinimaTrabajo: number;

    constructor(nombre: string, modalidad: string, nota: number, notaTrabajo: number) {
        super(nombre, modalidad, nota);
        this.notaMinimaTrabajo = notaTrabajo;
    }

    public getNotaMinimaTrabajo(): number {
        return this.notaMinimaTrabajo;
    }

    public setNotaMinimaTrabajo(nota: number): void {
        this.notaMinimaTrabajo = nota;
    }


}