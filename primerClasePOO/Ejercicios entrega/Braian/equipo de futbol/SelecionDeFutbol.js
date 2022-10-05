"use strict";
exports.__esModule = true;
exports.SeleccionDeFutbol = void 0;
var SeleccionDeFutbol = /** @class */ (function () {
    function SeleccionDeFutbol(pNombreSeleccion, pArrFutbolistas, pArrEquipoTecnico, pArrEquipoMedico) {
        this.listadoFutbolista = new Array;
        this.listadoEquipoTecnico = new Array;
        this.listadoEquipoMedico = new Array;
        this.nombreSeleccion = pNombreSeleccion;
        this.listadoFutbolista = pArrFutbolistas;
        this.listadoEquipoTecnico = pArrEquipoTecnico;
        this.listadoEquipoMedico = pArrEquipoMedico;
    }
    SeleccionDeFutbol.prototype.ingresarSeleccion = function (pNombreSeleccion) {
        this.nombreSeleccion = pNombreSeleccion;
    };
    SeleccionDeFutbol.prototype.obtenerSeleccion = function () {
        return this.nombreSeleccion;
    };
    SeleccionDeFutbol.prototype.agregarFutbolista = function (nuevoFutbolista) {
        this.listadoFutbolista.push(nuevoFutbolista);
    };
    SeleccionDeFutbol.prototype.agregarTecnico = function (nuevoTecnico) {
        this.listadoEquipoTecnico.push(nuevoTecnico);
    };
    SeleccionDeFutbol.prototype.agregarMedico = function (nuevoMedico) {
        this.listadoEquipoMedico.push(nuevoMedico);
    };
    return SeleccionDeFutbol;
}());
exports.SeleccionDeFutbol = SeleccionDeFutbol;
