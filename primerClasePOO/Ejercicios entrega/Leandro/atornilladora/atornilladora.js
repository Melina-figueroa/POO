"use strict";
exports.__esModule = true;
var Atornilladora = /** @class */ (function () {
    function Atornilladora(nombre, nSerie, torque) {
        this.encendida = this.encendida;
        this.marca = nombre;
        this.numSerie = nSerie;
        this.valorTorque = torque;
    }
    Atornilladora.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Atornilladora.prototype.getMarca = function () {
        return this.marca;
    };
    Atornilladora.prototype.setNumSerie = function (pNumSerie) {
        this.numSerie = pNumSerie;
    };
    Atornilladora.prototype.getNumSerie = function () {
        return this.numSerie;
    };
    Atornilladora.prototype.setTorque = function (pTorque) {
        this.valorTorque = pTorque;
    };
    Atornilladora.prototype.getTorque = function () {
        return this.valorTorque;
    };
    Atornilladora.prototype.setAtornillar = function (pEncendida) {
        this.encendida = pEncendida;
    };
    Atornilladora.prototype.getAtornillar = function (pEstado) {
        var textoEncendido;
        if (pEstado == false) {
            textoEncendido = 'Mantenga presionado el botón pulsador para activarla';
        }
        else {
            textoEncendido = 'Encendida';
        }
        return textoEncendido;
    };
    return Atornilladora;
}());
var atornillador = new Atornilladora("Einhell", 212034, 18);
console.log(atornillador.getMarca);
console.log(atornillador.getNumSerie());
console.log(atornillador.getTorque());
console.log(atornillador.getAtornillar(true));
