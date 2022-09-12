"use strict";
exports.__esModule = true;
var atornilladora = /** @class */ (function () {
    function atornilladora(nombre, nSerie, torque) {
        this.encendida = true;
        this.marca = nombre;
        this.numSerie = nSerie;
        this.valorTorque = torque;
    }
    atornilladora.prototype.obtenerDetalles = function () {
        console.log('Marca ', this.marca, 'Número de serie ', this.numSerie);
    };
    atornilladora.prototype.elegirTorque = function () {
        console.log('valor de torque ', '', this.valorTorque);
    };
    atornilladora.prototype.atornillar = function () {
        if (this.encendida == false) {
            console.log('Para activar presione el botón');
            this.encendida = true;
            console.log('Atornilladora lista para usarse');
        }
    };
    atornilladora.prototype.atornillando = function () {
        console.log('Activa');
    };
    return atornilladora;
}());
var atornillador = new atornilladora("Einhell", 212034, 18);
atornillador.elegirTorque();
atornillador.atornillar();
atornillador.atornillando();
atornillador.obtenerDetalles();
