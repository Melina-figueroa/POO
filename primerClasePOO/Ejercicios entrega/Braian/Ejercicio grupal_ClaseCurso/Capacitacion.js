"use strict";
exports.__esModule = true;
exports.Capacitacion = void 0;
var Capacitacion = /** @class */ (function () {
    function Capacitacion(curso) {
        this.curso = curso;
        this.notaCurso = new Array;
    }
    Capacitacion.prototype.setCurso = function (curso) {
        this.curso = curso;
    };
    Capacitacion.prototype.agregarNota = function (nota) {
        this.notaCurso.push(nota);
    };
    Capacitacion.prototype.getNotasCurso = function () {
        return this.notaCurso;
    };
    Capacitacion.prototype.getCurso = function () {
        return this.curso;
    };
    return Capacitacion;
}());
exports.Capacitacion = Capacitacion;
