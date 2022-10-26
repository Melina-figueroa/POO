"use strict";
exports.__esModule = true;
var Instructor_1 = require("./Instructor");
var Curso_1 = require("./Curso");
var CursoEspecial_1 = require("./CursoEspecial");
var Capacitacion_1 = require("./Capacitacion");
var curso1 = new Curso_1.Curso("Programación", "Presencial", 6);
var curso2 = new CursoEspecial_1.CursoEspecial("POO", "Virtual", 6, 7);
var capacitacion1 = new Capacitacion_1.Capacitacion(curso1);
var capacitacion2 = new Capacitacion_1.Capacitacion(curso2);
var instructor1 = new Instructor_1.Instructor(45454506, "Pablo", "Ramirez", 50);
var respuesta = instructor1.inscribirACurso(capacitacion2);
console.log(curso1.getModalidad());
console.log(curso2.getNotaMinimaCurso());
if (respuesta === false) {
    console.log("Has sido inscripto a este curso.");
}
else {
    console.log("Ya estás inscripto en este curso.");
}
