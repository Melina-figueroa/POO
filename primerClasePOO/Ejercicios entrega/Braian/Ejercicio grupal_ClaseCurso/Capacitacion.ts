import { Curso } from "./Curso";

export class Capacitacion {
    private notaCurso: number[];
    private curso: Curso;

    constructor(curso: Curso) {
        this.curso = curso;
        this.notaCurso = new Array<number>;
    }

    public setCurso(curso: Curso): void {
        this.curso = curso;
    }

    public agregarNota(nota: number): void {
        this.notaCurso.push(nota);
    }

    public getNotasCurso(): number[] {
        return this.notaCurso;
    }

    public getCurso(): Curso {
        return this.curso;
    }
}