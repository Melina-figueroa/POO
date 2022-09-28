"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(pEstaPrendido, pBateriaActual) {
        this.estaPrendido = pEstaPrendido;
        this.bateriaActual = pBateriaActual;
    }
    Telefono.prototype.mandarMensajes = function (pMensaje) {
        var mensaje = ' ';
        mensaje = pMensaje;
        return mensaje;
    };
    Telefono.prototype.hacerLlamada = function (pLlamar) {
        var llamada = 0;
        llamada = pLlamar;
        return llamada;
    };
    Telefono.prototype.prenderApagar = function (pPrendido) {
        this.estaPrendido = pPrendido;
    };
    Telefono.prototype.obtenerPrenderApagar = function () {
        var estadoTelefo = false;
        if (this.estaPrendido === true) {
            estadoTelefo = true;
        }
        else {
            estadoTelefo = false;
        }
        return estadoTelefo;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
