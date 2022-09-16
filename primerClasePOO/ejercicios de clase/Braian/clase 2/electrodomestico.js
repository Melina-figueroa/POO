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
    Electrodomestico.prototype.getBalance = function () {
        var balance = this.precioBase / this.peso;
        return balance;
    };
    Electrodomestico.prototype.getGamaElec = function () {
        var gamaProduc = " ";
        if (this.getBalance() < 3000) {
            gamaProduc = 'Gama baja';
        }
        else {
            gamaProduc = 'Gama alta';
        }
        return gamaProduc;
    };
    return Electrodomestico;
}());
var cafetera_samsung = new Electrodomestico('Samsung', 6000, 'Rojo', 900, 2);
console.log('Nombre del producto ' + cafetera_samsung.getNombre());
console.log('Balance del producto ' + cafetera_samsung.getBalance());
console.log('Gama del producto ' + cafetera_samsung.getGamaElec());
var cafetera_LG = new Electrodomestico('LG', 1000, 'Negro', 300, 6);
console.log('Nombre del producto ' + cafetera_LG.getNombre());
console.log('Balance del producto ' + cafetera_LG.getBalance());
console.log('Gama del producto ' + cafetera_LG.getGamaElec());
