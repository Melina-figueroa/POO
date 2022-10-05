"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellido, pNumPasaporte, pFechaNacimiento) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.numeroDePasaporte = pNumPasaporte;
        this.fechaDeNacimiento = pFechaNacimiento;
    }
    Persona.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Persona.prototype.ingresarNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.obtenerApellido = function () {
        return this.apellido;
    };
    Persona.prototype.ingresarApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.obtenerFechaNacimiento = function () {
        return this.fechaDeNacimiento;
    };
    Persona.prototype.ingresarFechaNacimiento = function (pFechaDeNacimiento, pFecha) {
        if (pFecha == 123)
            this.fechaDeNacimiento = pFechaDeNacimiento;
    };
    Persona.prototype.toString = function () {
        var respuesta = "Nombre " + " " + this.obtenerNombre() + "Apellido " + " " + this.obtenerApellido() + " Fecha de nacimiento: " + this.obtenerFechaNacimiento();
        return respuesta;
    };
    return Persona;
}());
exports.Persona = Persona;
