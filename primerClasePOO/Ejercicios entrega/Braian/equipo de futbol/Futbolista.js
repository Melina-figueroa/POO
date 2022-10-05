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
exports.Futbolista = void 0;
var Persona_1 = require("./Persona");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(pNombre, pApellido, pNumPasaporte, pFechaDeNacimienton, pCamiseta, PPosicion) {
        var _this = _super.call(this, pNombre, pApellido, pNumPasaporte, pFechaDeNacimienton) || this;
        _this.camiseta = pCamiseta;
        _this.posicion = PPosicion;
        _this.numeroDePasaporte = pNumPasaporte;
        _this.fechaDeNacimiento = pFechaDeNacimienton;
        return _this;
    }
    Futbolista.prototype.ingresarCamiseta = function (pCamiseta) {
        this.camiseta = pCamiseta;
    };
    Futbolista.prototype.obtenerCamiseta = function () {
        return this.camiseta;
    };
    Futbolista.prototype.ingresarPosicion = function (pPosicion) {
        this.posicion = pPosicion;
    };
    Futbolista.prototype.obtenerPosicion = function () {
        return this.posicion;
    };
    Futbolista.prototype.ingresarNumPasaporte = function (pNumPasaporte) {
        this.numeroDePasaporte = pNumPasaporte;
    };
    Futbolista.prototype.obtenerNumPasaporte = function () {
        return this.numeroDePasaporte;
    };
    Futbolista.prototype.ingresarFechaNacimiento = function (pFechaDeNacimiento, pFecha) {
        if (pFecha === 123)
            this.fechaDeNacimiento = pFechaDeNacimiento;
    };
    Futbolista.prototype.obtenerFechaNacimiento = function () {
        return this.fechaDeNacimiento;
    };
    return Futbolista;
}(Persona_1.Persona));
exports.Futbolista = Futbolista;
