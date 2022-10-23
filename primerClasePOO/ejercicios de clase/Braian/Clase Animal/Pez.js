"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pez = void 0;
var Animal_1 = require("./Animal");
var Pez = /** @class */ (function (_super) {
    __extends(Pez, _super);
    function Pez(pNombreAnimal, pCantidadDeAletas, pPatas) {
        var _this = _super.call(this, pPatas) || this;
        _this.nombreAnimal = pNombreAnimal;
        _this.cantidadDeAletas = pCantidadDeAletas;
        return _this;
    }
    Pez.prototype.ingresarNombre = function (pNombreAnimal) {
        this.nombreAnimal = pNombreAnimal;
    };
    Pez.prototype.obtenerNombre = function () {
        return this.nombreAnimal;
    };
    Pez.prototype.jugar = function (pNombre) {
        console.log(pNombre + " " + "Esta jugando");
    };
    Pez.prototype.comer = function () {
        console.log(this.nombreAnimal + " " + "Esta Comiendo");
    };
    Pez.prototype.caminar = function (pCantidadAletas) {
        console.log(this.nombreAnimal + '' + 'Esta nadando en' + ' ' + pCantidadAletas);
    };
    Pez.prototype.ingresarCantidadAletas = function (pCantidadAletas) {
        this.cantidadDeAletas = pCantidadAletas;
    };
    Pez.prototype.obtenerCantidadDeAletas = function () {
        return this.cantidadDeAletas;
    };
    return Pez;
}(Animal_1.Animal));
exports.Pez = Pez;
