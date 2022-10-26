import { Instructor } from "./Instructor";
import { Curso } from "./Curso";
import { CursoEspecial } from "./CursoEspecial";
import { Capacitacion } from "./Capacitacion";

let curso1: Curso = new Curso("Programación", "Presencial", 6);
let curso2: CursoEspecial = new CursoEspecial("POO", "Virtual", 6, 7);
let capacitacion1: Capacitacion = new Capacitacion(curso1);
let capacitacion2: Capacitacion = new Capacitacion(curso2);
let instructor1: Instructor = new Instructor(45454506, "Pablo", "Ramirez", 50);
let respuesta = instructor1.inscribirACurso(capacitacion2);



console.log(curso1.getModalidad());
console.log(curso2.getNotaMinimaCurso());
if (respuesta === false) {
    console.log("Has sido inscripto a este curso.");
} else {
    console.log("Ya estás inscripto en este curso.")
}