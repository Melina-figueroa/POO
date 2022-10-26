"use strict";
exports.__esModule = true;
exports.Instructor = void 0;
var Instructor = /** @class */ (function () {
    function Instructor(dni, nombre, apellido, cupoModalidad) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cupoModalidadVirtual = cupoModalidad;
        this.capacitaciones = new Array;
    }
    Instructor.prototype.inscribirACurso = function (capacitacion) {
        var respuesta = false;
        for (var i = 0; i < this.capacitaciones.length; i++) {
            if (capacitacion != this.capacitaciones[i]) {
                this.capacitaciones.push(capacitacion);
            }
            else {
                respuesta = true;
            }
        }
        return respuesta;
    };
    return Instructor;
}());
exports.Instructor = Instructor;
