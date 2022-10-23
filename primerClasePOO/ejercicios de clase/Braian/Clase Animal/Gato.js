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
exports.Gato = void 0;
var Animal_1 = require("./Animal");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(pNombreAnimal, pPatas) {
        var _this = _super.call(this, pPatas) || this;
        _this.nombreAnimal = pNombreAnimal;
        return _this;
    }
    Gato.prototype.ingresarNombre = function (pNombreAnimal) {
        this.nombreAnimal = pNombreAnimal;
    };
    Gato.prototype.obtenerNombre = function () {
        return this.nombreAnimal;
    };
    Gato.prototype.jugar = function (pNombre) {
        console.log(pNombre + " " + "Esta jugando");
    };
    Gato.prototype.comer = function () {
        console.log(this.nombreAnimal + " " + "Esta Comiendo");
    };
    Gato.prototype.caminar = function (cantidadPatas) {
        console.log(this.nombreAnimal + " " + "Esta caminando en " + cantidadPatas);
    };
    return Gato;
}(Animal_1.Animal));
exports.Gato = Gato;
