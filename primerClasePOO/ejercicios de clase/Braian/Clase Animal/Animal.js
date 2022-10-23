"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(pPatas) {
        this.cantidadPatas = pPatas;
    }
    Animal.prototype.ingresarPatas = function (pPatas) {
        this.cantidadPatas = pPatas;
    };
    Animal.prototype.obtenerPatas = function () {
        return this.cantidadPatas;
    };
    return Animal;
}());
exports.Animal = Animal;
