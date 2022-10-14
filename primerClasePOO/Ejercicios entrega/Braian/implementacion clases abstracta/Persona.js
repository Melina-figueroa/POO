"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellido, pNumDni) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.numeroDeDni = pNumDni;
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
    Persona.prototype.obtenerDni = function () {
        return this.numeroDeDni;
    };
    Persona.prototype.ingresarDni = function (pDni) {
        this.numeroDeDni = pDni;
    };
    Persona.prototype.toString = function () {
        return ' Cliente: ' + this.nombre + ' ' + this.apellido + ' \n ' + 'Número de DNI: ' + this.numeroDeDni + ' \n ' + '';
    };
    return Persona;
}());
exports.Persona = Persona;
