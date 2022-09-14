"use strict";
exports.__esModule = true;
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(pNombre, pPrecio, pColor, pConsumo, pPeso) {
        this.nombre = pNombre;
        this.precioBase = pPrecio;
        this.color = pColor;
        this.consumoEnergetico = pConsumo;
        this.peso = pPeso;
    }
    //setear parametro
    Electrodomestico.prototype.setNombre = function (nombreElec) {
        this.nombre = nombreElec;
    };
    //mostrar parametro
    Electrodomestico.prototype.getNombre = function () {
        return this.nombre;
    };
    //setear parametro
    Electrodomestico.prototype.setPrecio = function (precioElec) {
        this.precioBase = precioElec;
    };
    //mostrar parametro
    Electrodomestico.prototype.getPrecio = function () {
        return this.precioBase;
    };
    //setear parametro
    Electrodomestico.prototype.setColor = function (colorElec) {
        this.color = colorElec;
    };
    //mostrar parametro
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.setConsumoEner = function (consumoElec) {
        this.consumoEnergetico = consumoElec;
    };
    Electrodomestico.prototype.getConsumoElec = function () {
        return this.consumoEnergetico;
    };
    return Electrodomestico;
}());
var cafetera = new Electrodomestico('Samsung', 6000, 'Rojo', 900, 2);
console.log(cafetera.getNombre());
