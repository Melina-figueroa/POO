import { Capacitacion } from "./Capacitacion";

export class Instructor {
    private dni: number;
    private nombre: string;
    private apellido: string;
    private cupoModalidadVirtual: number;
    private capacitaciones: Capacitacion[];

    constructor(dni: number, nombre: string, apellido: string, cupoModalidad: number) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cupoModalidadVirtual = cupoModalidad;
        this.capacitaciones = new Array<Capacitacion>;
    }

    public inscribirACurso(capacitacion: Capacitacion): boolean {
        let respuesta: boolean = false;
        for (let i: number = 0; i < this.capacitaciones.length; i++) {
            if (capacitacion != this.capacitaciones[i]) {
                this.capacitaciones.push(capacitacion);
            } else {
                respuesta = true;
            }
        }
        return respuesta;
    }


}