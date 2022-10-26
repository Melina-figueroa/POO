export class Curso {
    private nombre: string;
    private modalidad: string;
    private minimoNotaCurso: number;

    constructor(nombre: string, modalidad: string, notaMin: number) {
        this.nombre = nombre;
        this.modalidad = modalidad;
        this.minimoNotaCurso = notaMin;
    }

    public getModalidad(): string {
        return this.modalidad;
    }
    public getNotaMinimaCurso(): number {
        return this.minimoNotaCurso;
    }
    public setNotaMinimaCurso(notaMin: number): void {
        this.minimoNotaCurso = notaMin;
    }
}