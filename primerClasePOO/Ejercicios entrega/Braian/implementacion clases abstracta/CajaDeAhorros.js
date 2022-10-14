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
exports.CajaDeAhorros = void 0;
var Cuenta_1 = require("./Cuenta");
var CajaDeAhorros = /** @class */ (function (_super) {
    __extends(CajaDeAhorros, _super);
    function CajaDeAhorros(pCliente, pCuenta) {
        return _super.call(this, pCliente, pCuenta) || this;
    }
    CajaDeAhorros.prototype.ingresarRetiro = function (pSaldoMin) {
        this.saldoMinimo = pSaldoMin;
    };
    CajaDeAhorros.prototype.obtenerRetiro = function () {
        return this.saldoMinimo;
    };
    CajaDeAhorros.prototype.ingresarInteres = function (pInteres) {
        this.interes = pInteres;
    };
    CajaDeAhorros.prototype.obtenerInteres = function () {
        return this.interes;
    };
    CajaDeAhorros.prototype.retirar = function (pRetiro) {
        var retiro = this.saldo - pRetiro;
        if (0 < this.saldoMinimo) {
            this.saldo = this.saldo - pRetiro;
        }
    };
    CajaDeAhorros.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * this.interes;
    };
    CajaDeAhorros.prototype.toString = function () {
        return ' Número de cuenta: ' + this.numeroDeCuenta + ' \n ' + 'Interés aplicado: ' + this.interes + '%' + ' \n ' + 'Intereses generados: ' + this.saldo + '\n';
    };
    return CajaDeAhorros;
}(Cuenta_1.Cuenta));
exports.CajaDeAhorros = CajaDeAhorros;
