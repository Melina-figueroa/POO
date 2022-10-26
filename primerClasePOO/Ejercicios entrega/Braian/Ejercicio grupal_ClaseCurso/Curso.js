"use strict";
exports.__esModule = true;
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(nombre, modalidad, notaMin) {
        this.nombre = nombre;
        this.modalidad = modalidad;
        this.minimoNotaCurso = notaMin;
    }
    Curso.prototype.getModalidad = function () {
        return this.modalidad;
    };
    Curso.prototype.getNotaMinimaCurso = function () {
        return this.minimoNotaCurso;
    };
    Curso.prototype.setNotaMinimaCurso = function (notaMin) {
        this.minimoNotaCurso = notaMin;
    };
    return Curso;
}());
exports.Curso = Curso;
